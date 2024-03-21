import { sendContactForm, sendContactForm2 } from "@/lib/App";
import { type } from "os";
import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSpinner2 } from "react-icons/im";

type Props = {
  show: boolean;
  setShow: any;
  type: "get in touch" | "contact us";
};

const ContactUsModal = ({ show, setShow, type }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // handle submit

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactForm2({ name, email, phoneNumber, address, comment });

      // await sendContactForm({
      //   name,
      //   email,
      //   phoneNumber,
      //   address,
      //   comment,
      // });

      toast("success");
      setShow(false);
    } catch (error) {
      toast("error");
    } finally {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setComment("");
      setAddress("");
      setLoading(false);
    }
  };

  return (
    <div>
      {show ? (
        <section className="flex backdrop-blur-sm items-centers md:h-max">
          <section
            className={` w-full md:w-[40rem] m-auto px-4 py-4 bg-normal text-[white]  rounded-[.5rem] border-2 border-normal`}
          >
            {loading ? (
              <span className="block w-full py-4 text-center">Loading ...</span>
            ) : null}
            <header className="flex items-center justify-between ">
              <div className="text-center w-full font-bold text-[1.2rem] uppercase">
                <h4>Contact us</h4>
              </div>
              <p
                className="flex justify-end cursor-pointer text-[1.2rem]"
                onClick={() => setShow(false)}
              >
                <FaTimes />
              </p>
            </header>

            <form
              className="flex flex-col gap-6 md:gap-8 px-4 mt-3 overflow-y-scroll h-[28rem]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="name"
                  className="font-medium text-[1rem] capitalize"
                >
                  name:
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Name or Business Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] border border-normal"
                />
              </div>

              <div className="flex flex-col gap-4 ">
                <label
                  htmlFor="email"
                  className="font-medium text-[1rem] capitalize"
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
                  className="w-full py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] border border-normal"
                />
              </div>
              <div className="flex flex-col gap-4">
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
                  placeholder="Enter Service City and Zip Code"
                  className="w-full  py-3 rounded-[.2rem] cursor-pointer pl-2 text-[black] border border-normal"
                />
              </div>

              <textarea
                name="comment"
                id="text-area "
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ resize: "none" }}
                placeholder="How may we help you?"
                className={`w-full  min-h-[10rem] px-2 py-4 border border-[#aaaaaa] tracking-[1px] focus:outline-none active:outline-none active:border-none text-[black]  my-4`}
              ></textarea>

              <div
                className={`${
                  type === "get in touch"
                    ? "bg-normal text-[#fff]"
                    : "bg-normal text-[white]"
                }  text-center w-[15rem] m-auto  rounded-[.2rem]`}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="gap-2 w-full flex items-center justify-center py-3 text-black bg-white rounded"
                >
                  {loading ? (
                    <ImSpinner2 className="animate-spin" size={20} />
                  ) : null}
                  Submit
                </button>
              </div>
            </form>
          </section>
        </section>
      ) : null}

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
  );
};

export default ContactUsModal;

//   className="bg-[#fff] text-normal m-auto px-8 py-2 rounded-[.2rem] cursor-pointer border-none "
