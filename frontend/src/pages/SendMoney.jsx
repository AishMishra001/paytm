import Button from "../components/Button";
import Button2 from "../components/Button2";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import WarningBottom from "../components/WarningBottom";
import { useSearchParams } from 'react-router-dom';
function SendMoney({User, UserImage}) {
  
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id")
  const name = searchParams.get("name")

  return (
    <>
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
 <div className="rounded-lg flex flex-col p-6 h-[45%] w-[30%] space-y-4 gap-20 bg-white shadow-xl">
   <Header label="Send Money"/>
   <div className="flex gap-2 flex-col">
   <div className='flex items-center gap-2'>
          <button className='bg-green-500 rounded-full py-2 px-4 text-2xl text-white font-bold'>{name[0].toUpperCase()}</button>
          <div className='text-black font-bold text-3xl'>{name}</div>
        </div>
   <InputBox label="Amount (in Rs)" placeholder="Enter amount" type={'number'} />
   <Button2 label="Initiate Transfer" />
   </div>
 </div>
</div>
 </>
  )
}

export default SendMoney