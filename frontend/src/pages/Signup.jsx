import React from 'react';
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import WarningBottom from "../components/WarningBottom";

export function Signup() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
      <div className="rounded-lg flex flex-col p-6 h-[75%] w-[22%] space-y-4 bg-white shadow-xl">
        <Header label="Sign up"/>
        <SubHeading label="Enter your information to create an account" />
        <InputBox label="First Name" placeholder="Aish" />
        <InputBox label="Last Name" placeholder="Mishra" />
        <InputBox label="Email" placeholder="aish001@gmail.com" />
        <InputBox label="Password" placeholder="1234255" />
        <Button label="Sign up" />
        <WarningBottom label="Already have an account?" buttonText="Sign in" to="/signin" />
      </div>
    </div>
  );
}
