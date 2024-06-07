import { useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import Button2 from "../components/Button2";
import Header from "../components/Header";
import InputBox from "../components/InputBox";

function SendMoney({ User, UserImage }) {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const handleTransfer = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/v1/account/transfer", {
        to: id,
        amount: amount
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Transfer failed:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-400">
        <div className="rounded-lg flex flex-col p-6 h-[45%] w-[30%] space-y-4 gap-20 bg-white shadow-xl">
          <Header label="Send Money" />
          <div className="flex gap-2 flex-col">
            <div className='flex items-center gap-2'>
              <button className='bg-green-500 rounded-full py-2 px-4 text-2xl text-white font-bold'>{name[0].toUpperCase()}</button>
              <div className='text-black font-bold text-3xl'>{name}</div>
            </div>
            <InputBox onChange={(e) => setAmount(e.target.value)} label="Amount (in Rs)" placeholder="Enter amount" type={'number'} />
            <Button2 onClick={handleTransfer} label={loading ? "Processing..." : success ? "Success!" : "Initiate Transfer"} disabled={loading || success} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SendMoney;
