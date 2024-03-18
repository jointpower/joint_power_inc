import InputText from "@/components/atom/InputText/InputText";
import { useRouter } from "next/router";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";


const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      if (email === 'admin@mail.com' && password === 'password123') {
        toast.success('Logged in successfully');
        if (typeof window != undefined) {
          window.localStorage.setItem('loggedIn', 'yes');
          router.push('/blog');
        }
      } else {
        console.log('error')
        toast.error('Incorrect email or password');
      }
      setLoading(false)
    }, 1000);
  }

  return (
    <div className="pt-24">
      <div className="mt-32 text-black w-[90%] sm:w-96 mx-auto overflow-x-hidden">
          <p className="text-sm mb-5">Fill the login form below to access our exclusive content.</p>
          <p className="text-xs">Required Fields <span className="text-red-500 text-base font-bold">*</span></p>
        <div className="mt-4">
          <p className="font-medium">Email Address <span className="text-red-500 text-base font-bold">*</span></p>
          <InputText
            placeholder="Email Address"
            name={"email"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required={true}
            classNames="w-full px-[21px] py-4 text-grey-2 mb-[14.4px] border focus:outline-none rounded shadow"
          />
        </div>
        <div className="mt-3">
          <p  className="font-medium">Password <span className="text-red-500 text-base font-bold">*</span> </p>
          <InputText
            placeholder="Enter Password"
            name={"password"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required={true}
            classNames=" w-full px-[21px] py-4 text-grey-2 mb-[14.4px] border focus:outline-none rounded shadow"
          />
        </div>
        <button
          onClick={login}
          type="submit"
          disabled={loading}
          className="mt-5 gap-2 w-full flex items-center justify-center py-4 text-white bg-normal rounded-xl"
        >
          {loading ? <ImSpinner2 className="animate-spin" size={20} /> : null}
          Submit
        </button>
      </div>
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

export default LoginPage;
