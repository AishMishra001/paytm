import React, { useState } from 'react';
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import WarningBottom from "../components/WarningBottom";
import axios from 'axios';

export function Signup() {

  const [firstname , Setfirstname] = useState("")
  const [lastname , Setlastname] = useState("")
  const [email , Setemail] = useState("")
  const [password , Setpassword] = useState("")

  return (
    
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
      <div className="rounded-lg flex flex-col p-6 h-[75%] w-[22%] space-y-4 bg-white shadow-xl">
        <Header label="Sign up"/>
        <SubHeading label="Enter your information to create an account" />
        <InputBox onChange={
          (e) => Setfirstname(e.target.value)
        } label="First Name" placeholder="Aish" type={'text'} />
        <InputBox onChange={(e)=>{
            Setlastname(e.target.value)
        }} label="Last Name" placeholder="Mishra" type={'text'}/>
        <InputBox onChange={(e)=>{
            Setemail(e.target.value)
        }} label="Email" placeholder="aish001@gmail.com" type={'text'}/>
        <InputBox onChange={(e)=>{
            Setpassword(e.target.value)
        }} label="Password" placeholder="1234255" type={'text'}/>
        <Button onClick={
          async ()=>{
             const response = await axios.post("http://localhost:3001/api/v1/user/signup" , {
              firstname : firstname 
              , lastname : lastname
              , username : email
              , password : password
             })
             localStorage.setItem("token", response.data.token) ; 
            }
        } label="Sign up" />
        <WarningBottom label="Already have an account?" buttonText="Sign in" to="/signin" />
      </div>
    </div>
  );
}
