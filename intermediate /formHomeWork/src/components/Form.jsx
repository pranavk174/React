import React from "react";
import { useState } from "react";

export default function Form() {
  const [formdata, setFormdata] = useState({
    f_name: "",
    l_name: " ",
    Email: "",
    Country: " ",
    Street: " ",
    City: "",
    State: " ",
    Zip: " ",
    Comments: false,
    Candidates: false,
    Offers: false,
    Notification: " ",
  });

  const onChangeHandler = (event) => {
    const { name, type, checked, value } = event.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formdata);
  };
  return (
    <div className="flex flex-col bg-white min-h-[100vh] min-w-[100vw] items-center text-black justify-center ">
      <h1>Form Data Handler</h1>
      <form
        onSubmit={onSubmitHandler}
        className="flex border w-[70rem] flex-col justify-center p-2 items-center gap-[.5rem]"
      >
        <div className="w-[70%]">
          <label className="text-[1rem] font-bold" htmlFor="fname">
            First Name
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            onChange={onChangeHandler}
            id="fname"
            name="f_name"
            type="text"
          />
        </div>

        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="lname">
            Last Name
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            onChange={onChangeHandler}
            id="lname"
            name="l_name"
            type="text"
          />
        </div>
        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="email">
            Email
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            name="Email"
            onChange={onChangeHandler}
            id="email"
            type="email"
          />
        </div>
        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="country">
            Country
          </label>{" "}
          <br />
          <select
            className="border-2 w-full rounded-md h-[2rem] bg-white text-black"
            id="country"
            name="Country"
            onChange={onChangeHandler}
            value={formdata.Country}
          >
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="America">America</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="street">
            Street Address
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            onChange={onChangeHandler}
            id="street"
            name="Street"
            type="text"
          />
        </div>
        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="city">
            City
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            onChange={onChangeHandler}
            id="city"
            name="City"
            type="text"
          />
        </div>
        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="state">
            State/Province
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            onChange={onChangeHandler}
            id="state"
            name="State"
            type="text"
          />
        </div>
        <div className="w-[70%] ">
          <label className="text-[1rem] font-bold" htmlFor="pin">
            ZIP/Pin Code
          </label>{" "}
          <br />
          <input
            className=" border-2 rounded-md bg-white text-black w-full"
            onChange={onChangeHandler}
            id="pin"
            name="Zip"
            type="number"
          />
        </div>
        <div className="w-[70%] ">
          <h1 className="text-[1rem] font-bold">By Email</h1> <br /> <br />
          <input
            className="bg-white"
            onChange={onChangeHandler}
            id="cmnts"
            name="Comments"
            checked={formdata.Comments}
            type="checkbox"
          />
          <div>
          <label className="text-[1rem] font-bold" htmlFor="cmnts">
             Comments
          </label>
          <p>get Notified when post a comment on a posting</p>
          </div>
         
          <br /> <br />
          <div>
          <input
            className="bg-white"
            onChange={onChangeHandler}
            id="candidates"
            name="Candidates"
            checked={formdata.Candidates}
            type="checkbox"
          />
          <label className="text-[1rem] font-bold" htmlFor="candidates">
            Candidates
          </label>
          <p>get Notified when post a comment on a posting</p> <br /> <br />

          </div>

          <div>

          
                   <input
            className="bg-white"
            onChange={onChangeHandler}
            id="offers"
            name="Offers"
            checked={formdata.Offers}
            type="checkbox"
          />
          <label className="text-[1rem] font-bold" htmlFor="offers">
            Offers
          </label>
          <p>get Notified when post a comment on a posting</p>
          </div>
        </div>
        <div className="w-[70%] ">
          <h2 className="text-[1rem] font-bold">Push Buttons</h2>
          <p>These are delievered by SMS on your mobile Phone</p> <br /> <br />
          <input
            id="ev"
            name="Notification"
            onChange={onChangeHandler}
            checked={formdata.Notification === "Everything"}
            value="Everything"
            type="radio"
          />
          <label className="text-[1rem] font-bold" htmlFor="ev">
            Everything
          </label>{" "}
          <br /> <br />
          <input
            id="same"
            name="Notification"
            onChange={onChangeHandler}
            checked={formdata.Notification === "Same as Email"}
            value="Same as Email"
            type="radio"
          />
          <label className="text-[1rem] font-bold" htmlFor="same">
            Same as email
          </label>{" "}
          <br /> <br />
          <input
            name="Notification"
            id="no"
            onChange={onChangeHandler}
            value="No Push Notification"
            checked={formdata.Notification === "No Push Notification"}
            type="radio"
          />
          <label className="text-[1rem] font-bold" htmlFor="no">
            No Push Notifications
          </label>
        </div>
        <div className="w-[70%] ">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
