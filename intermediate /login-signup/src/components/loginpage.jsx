import React from "react";
import {  NavLink , useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {toast} from "react-hot-toast"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function loginForm({ IsLoggedIn, SetIsLoggedIn}) {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()


  const [icon, Seticon] = useState(false);

  const [show, setShow] = useState(false);

  const onChangeHandler = (event) => {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const SubmitHandler = (event)=>{
    event.preventDefault()
    navigate("/dashboard")
    SetIsLoggedIn(true)
    console.log("after login " ,IsLoggedIn)
    toast.success("Login Successfully")

  }
  const onClickshow = () => {
    if (icon === false) {
      Seticon(true);
      setShow(true);
    } else {
      Seticon(false);
      setShow(false);
    }
  };

  return (
    <form onSubmit={SubmitHandler} action="" className="flex w-[25vw] mt-[2rem] flex-col gap-7">
      <div className="flex flex-col ">
        <label htmlFor="email">
          Email Address<sup className="text-red-600"> *</sup>{" "}
        </label>
        <input
          id="email"
          name="email"
          className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b"
          onChange={onChangeHandler}
          value={formdata.email}
          placeholder="Please Enter Email"
          type="email"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="pas">
          Password <sup className="text-red-600"> *</sup>{" "}
        </label>
       
        <input
          name="password"
          id="pass"
          className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b"
          onChange={onChangeHandler}
          value={formdata.password}
          placeholder="Please Enter Password"
          type={show ? "text" : "password"}
        />
         <i
          onClick={onClickshow}
          className="relative bottom-[1.8rem] text-[1.3rem] left-[24rem]"
        >
          {icon ? <FaEye /> : <FaEyeSlash />}
        </i>
        <NavLink className="text-[0.6rem]  text-end">
          Forgot Password
        </NavLink>
      </div>
      <div className="flex flex-col gap-[3rem]">
        <button className="bg-yellow-500 p-[0.5rem] font-bold rounded-md w-full">
          Sign In
        </button>
        <div className="flex items-center gap-2">
          <div className="w-full bg-white/40 h-[.1rem]"></div>
          <p> OR </p>
          <div className="w-full bg-white/40 h-[.1rem]"></div>
        </div>
        <button className="flex text-center bg-gray-700/50  items-center justify-center gap-2  p-[0.5rem] font-bold rounded-md w-full ">
          <FcGoogle className="text-[1.5rem]" /> SignIn with Google
        </button>
      </div>
    </form>
  );
}
