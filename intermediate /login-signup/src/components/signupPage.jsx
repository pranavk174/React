
import { FcGoogle } from "react-icons/fc";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
export default function signupForm({IsLoggedIn, SetIsLoggedIn}) {
const navigate = useNavigate()

const [icon, Seticon] = useState(false);

  const [show, setShow] = useState(false);

  const onClickshow = () => {
    if (icon === false) {
      Seticon(true);
      setShow(true);
    } else {
      Seticon(false);
      setShow(false);
    }
  };

  const [icon1, Seticon1] = useState(false);

  const [show1, setShow1] = useState(false);


  const onClickshow1 = () => {
    if (icon1 === false) {
      Seticon1(true);
      setShow1(true);
    } else {
      Seticon1(false);
      setShow1(false);
    }
  };



  const [formdata, setFormdata] = useState({
    fname :"",
    lname: "",
    email: "",
    password: "",
    C_pass : ""
  });
  const SubmitHandler = (event)=>{
    event.preventDefault()
    if(formdata.password != formdata.C_pass){
        toast.error("Password did not matched")
        return navigate("/signup")
    }
    else{
      navigate("/dashboard")
      console.log("before login",IsLoggedIn)
      SetIsLoggedIn(true)
      console.log("after login",IsLoggedIn)
      toast.success("Sign Up Successfull ")
    }

   
  }
  const onChangeHandler = (event) => {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
       <form onSubmit = {SubmitHandler} className="flex w-[25vw] mt-[2rem] flex-col gap-7">
        <div className="flex justify-between ">
          <div className="flex flex-col " >
          <label className="text-[.9rem]" htmlFor="email">First Name<sup className=" text-red-600 "> *</sup> </label>
            <input name="fname" id="text" onChange={onChangeHandler} value={formdata.fname} className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b" placeholder="Enter First Name" type="text" />
          </div>
          <div className="flex flex-col ">
          <label className="text-[.9rem]" htmlFor="lname">Last Name<sup className=" text-red-600"> *</sup> </label>
            <input name="lname" id="text" onChange={onChangeHandler} value={formdata.lname} className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b" placeholder="Enter Last Name" type="text" />
    
          </div>
               </div>
        
        <div className="flex flex-col ">
            <label className="text-[.9rem]" htmlFor="email">Email Address<sup className=" text-red-600"> *</sup> </label>
            <input name="email" id="email" onChange={onChangeHandler} value={formdata.email} className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b" placeholder="Enter Email" type="email" />
        </div>
       
        <div className="flex justify-between ">
          <div className="flex flex-col " >
          <label className="text-[.9rem]" htmlFor="pas">Enter Password<sup className="text-red-600 "> *</sup> </label>
            <input name="password" id="pas" onChange={onChangeHandler} value={formdata.password} className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b" placeholder="Enter Password" type={show ? "text" : "password"} />
            <i
          onClick={onClickshow}
          className="relative bottom-[1.8rem] w-[1.3rem]  left-[10rem] text-[1.3rem] "
        >
          {icon ? <FaEye  /> : <FaEyeSlash  />}
        </i>
          </div>
          <div className="flex flex-col ">
          <label className="text-[.9rem]" htmlFor="cpas">Confirm Password<sup className="text-red-600"> *</sup> </label>
            <input name="C_pass" onChange={onChangeHandler} id="cpas" value={formdata.pass} className="bg-gray-600/70 h-[2.4rem] text-[1rem] p-2 rounded-md bordet-b" placeholder="Enter Password" type={show1 ? "text" : "password"}/>
            <i
          onClick={onClickshow1}
          className="relative bottom-[1.8rem] w-[1.3rem]  left-[10rem] text-[1.3rem] "
        >
          {icon1 ? <FaEye  /> : <FaEyeSlash  />}
        </i>
          </div>
               </div> 
        <div className="flex flex-col  gap-[3rem]">
        <button className="bg-yellow-500 p-[0.5rem] font-bold rounded-md w-full">Create Account</button>
        <div className="flex items-center gap-2">
            <div className="w-full bg-white/40 h-[.1rem]"></div>
            <p> OR </p>
            <div className="w-full bg-white/40 h-[.1rem]"></div>
        </div>
        <button className="flex text-center bg-gray-700/50  items-center justify-center gap-2  p-[0.5rem] font-bold rounded-md w-full "><FcGoogle className="text-[1.5rem]" /> SignIn with Google</button>
        </div>
      </form>

  )
}
