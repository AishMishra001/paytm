import React from 'react';
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import WarningBottom from "../components/WarningBottom";

export function Signin(){
    return (
      <>
         <div className="w-full h-screen flex items-center justify-center bg-gray-400">
      <div className="rounded-lg flex flex-col p-6 h-[52%] w-[30%] space-y-4 bg-white shadow-xl">
        <Header label="Sign in"/>
        <SubHeading label="Enter your credentials to access your account" />
        <InputBox label="Email" placeholder="aish001@gmail.com" />
        <InputBox label="Password" placeholder="01234567" />
        <Button label="Sign in" />
        <WarningBottom label="Don't have a account?" buttonText="Sign up" to="/signup" />
      </div>
    </div>
      </>
    )
}

