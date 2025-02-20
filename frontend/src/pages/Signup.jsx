import React, { useState } from 'react';
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import WarningBottom from "../components/WarningBottom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://paytm-xfci.vercel.app/api/v1/user/signup", {
        firstname,
        lastname,
        username: email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-400 relative">
      <div className="rounded-lg flex flex-col items-center my-14 mx-6 sm:mx-10 sm:m-2 p-6 bg-white shadow-xl w-full max-w-lg gap-4 h-full sm:h-[75%] overflow-y-auto">
        <Header label="Sign up" />
        <SubHeading label="Enter your information to create an account" />
        <InputBox onChange={(e) => setFirstname(e.target.value)} label="First Name" placeholder="Aish" type="text" />
        <InputBox onChange={(e) => setLastname(e.target.value)} label="Last Name" placeholder="Mishra" type="text" />
        <InputBox onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="aish001@gmail.com" type="text" />
        <InputBox onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="1234255" type="text" />
        <Button onClick={handleSignup} label={loading ? <ClipLoader size={20} color={"#fff"} /> : "Sign up"} disabled={loading} />
        <div className="mt-auto">
          <WarningBottom label="Already have an account?" buttonText="Sign in" to="/signin" />
        </div>
      </div>
    </div>
  );
}
