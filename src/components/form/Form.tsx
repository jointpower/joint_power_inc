import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState, useCallback } from "react";
import InputText from "../atom/InputText/InputText";
import { sendContactForm, sendContactForm2 } from "../../lib/App";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { spawn } from "child_process";
import { setTimeout } from "timers/promises";
import { ImSpinner2 } from "react-icons/im";
// import { toast } from 'react-toastify';

type Props = {
  show: boolean;
  setShow: any;
};

const Form = ({ show, setShow }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      await sendContactForm2({
        name,
        email,
        comment,
        address,
        phoneNumber,
      }).then((res) => {
        console.log(res);
      });

      // await sendContactForm({ name, email, comment, address, phoneNumber });
      setSuccess(true);
      toast("success");
      setShow(false);
    } catch (error) {
      setSuccess(false);
      setError(true);
      toast("error");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setComment("");
    }
  };
  return (
    <>
      {show ? (
        <div className="flex backdrop-blur-sm items-centers h-[28rem] md:h-max">
          <section className="w-full md:w-[40rem] m-auto p-2 py-4 bg-normal text-[#fff] rounded-[.5rem]">
            {error ? (
              <span className="bg-[red] text-[#fff] w-full  block p-4">
                Wrong Text
              </span>
            ) : null}

            {loading ? (
              <span className="block w-full py-4 text-center">Loading ...</span>
            ) : null}
            <header className="flex items-center justify-between">
              <div className="text-center w-full font-bold text-[1.2rem] uppercase">
                <h4>Contact us</h4>
              </div>{" "}
              <p
                className="flex justify-end cursor-pointer text-[1.2rem]"
                onClick={() => setShow(false)}
              >
                <FaTimes />
              </p>
            </header>

            <form
              className="px-4 mt-3 overflow-y-scroll h-[28rem]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4 my-4">
                <label
                  htmlFor="name"
                  className="font-medium text-[1rem] uppercase"
                >
                  name:
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full md:w-[80%] py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-4 my-4">
                <label
                  htmlFor="email"
                  className="font-medium text-[1rem] uppercase"
                >
                  email:
                </label>

                <input
                  type="email"
                  name="email"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full md:w-[80%] py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-4 my-4">
                <label
                  htmlFor="phoneNumber"
                  className="font-medium text-[1rem] capitalize"
                >
                  Phone Number:
                </label>

                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  id="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                  className="w-full  py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] border border-normal"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label
                  htmlFor="homeAddress"
                  className="font-medium text-[1rem] capitalize"
                >
                  City and Zip Code:
                </label>

                <input
                  type="text"
                  name="homeAddress"
                  value={address}
                  id="homeAddress"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter City and Zip Code"
                  className="w-full  py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] border border-normal"
                />
              </div>

              <textarea
                name="comment"
                id="text-area "
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ resize: "none" }}
                placeholder="How can we help you?"
                className={`w-full md:w-[80%] min-h-[10rem] px-2 py-4  tracking-[1px] focus:outline-none active:outline-none active:border-none text-[black]  my-4`}
              ></textarea>

              <div className="text-center">
              <button
                  type="submit"
                  disabled={loading}
                  className="gap-2 w-full flex items-center justify-center py-3 text-white bg-normal rounded"
                >
                 {loading ? (
                    <ImSpinner2 className="animate-spin" size={20} />
                  ) : null}
                  Submit
                </button>
              </div>
            </form>
          </section>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      ) : null}
    </>
  );
};

export default Form;
