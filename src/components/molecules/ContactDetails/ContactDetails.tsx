import Button from "@/components/atom/Button/Button";
import InputText from "@/components/atom/InputText/InputText";
import { sendContactForm, sendContactForm2 } from "@/lib/App";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactDetails = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactForm2({ name, email, phoneNumber, comment, address });
      await sendContactForm({
        name,
        email,
        phoneNumber,
        comment,
        address,
      });

      toast("success");
    } catch (error) {
      setError(true);
    } finally {
      setName("");
      setEmail("");
      setComment("");
      setPhoneNumber("");
      setAddress("");
      setLoading(false);
    }
  };

  return (
    <div className="container w-full lg:w-[431px]">
      {error ? (
        <span className="bg-[red] text-[#fff] w-full  block p-4">
          Wrong Text
        </span>
      ) : null}

      {loading ? (
        <span className="block w-full py-4 text-center text-normal">
          Loading ...
        </span>
      ) : null}
      <form action="" className="flex flex-col " onSubmit={handleSubmit}>
        <InputText
          data-aos="fade-up"
          placeholder="Name"
          name={"name"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          required={true}
          classNames="px-[21px] py-4 text-grey-2 mb-[14.4px] border-t focus:outline-none rounded shadow"
        />
        <InputText
          data-aos="fade-up"
          placeholder="Phone Number"
          name={"phoneNumber"}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          type="text"
          required={true}
          classNames=" px-[21px] py-4 text-grey-2 mb-[14.4px] border-t focus:outline-none rounded shadow"
        />
        <InputText
          data-aos="fade-up"
          placeholder="Email Address"
          name={"email"}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required={true}
          classNames=" w-full lg:w-[431px] px-[21px] py-4 text-grey-2 mb-[14.4px] border-t focus:outline-none rounded shadow"
        />
        {/* <InputText
          placeholder="Enter City and Zip Code"
          name={"address"}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required={true}
          classNames=" w-full lg:w-[431px] px-[21px] py-4 text-grey-2 mb-[14.4px] border-t focus:outline-none rounded shadow"
        /> */}

        <textarea
          data-aos="fade-up"
          name="more-info"
          placeholder="How can we help you ?"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          required={true}
          className="p-5 border border-line w-full lg:w-[431px] text-grey-2 h-[130px] mb-[49px] mt-2 md:mt-4 py border-t focus:outline-none rounded shadow"
        />
        <button
          data-aos="fade-up"
          type="submit"
          className="w-full py-4 m-auto mb-2 text-white rounded bg-normal"
        >
          Submit Request
        </button>
      </form>
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

export default ContactDetails;
