import { FaFacebook, FaMicrosoft } from "react-icons/fa";
import ReusableForm from "../components/ReusuableForm";
import { GrGoogle } from "react-icons/gr";

const Login = () => {
  const loginConfig = {
    title: "Sign in to your account",
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Username or Email ID",
        required: true,
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Password",
        required: true,
      },
    ],
    submitButton: {
      text: "Sign In",
      socialText: "Sign in with",
    },
    socialLogins: [
      {
        name: "Facebook",
        icon: <img src="/facebook.png" />,
      },
      {
        name: "Google",
        icon: <img src="/google.svg" />,
      },
      {
        name: "Microsoft",
        icon: <img src="/microsoft.svg" />,
      },
    ],
  };

  const handleLoginSubmit = (formData) => {
    console.log("Login form submitted:", formData);
    // logic
  };

  return (
    <div className="min-h-screen lg:min-h-[70vh] grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* Left side - Form */}
      <div className="w-full h-max flex items-center justify-center mt-28 mb-16">
        <ReusableForm {...loginConfig} onSubmit={handleLoginSubmit} />
      </div>

      {/* Right side - Image/Content */}
      <div className="">
        <img src="/login.svg" alt="" />
      </div>
    </div>
  );
};

export default Login;
