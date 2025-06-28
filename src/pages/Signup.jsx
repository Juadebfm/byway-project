import ReusableForm from "../components/ReusuableForm";

const Signup = () => {
  const signupConfig = {
    title: "Create Your Account",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "firstName",
            label: "Full Name",
            placeholder: "First Name",
            required: true,
          },
          {
            name: "lastName",
            label: "", // Empty label for second field in row
            placeholder: "Last Name",
            required: true,
          },
        ],
      },
      {
        name: "username",
        label: "Username",
        placeholder: "Username",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email ID",
        required: true,
      },
      {
        type: "row",
        fields: [
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter Password",
            required: true,
          },
          {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm Password",
            required: true,
          },
        ],
      },
    ],
    submitButton: {
      text: "Create Account",
      socialText: "Sign up with",
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

  const handleSignupSubmit = (formData) => {
    console.log("Signup form submitted:", formData);
    // Add your signup logic here
    // e.g., API call to create user account
  };

  return (
    <div className="min-h-max lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center justify-center">
      {/* Left side - Image/Content */}
      <div className="mb-20 lg:mb-0">
        <img src="/login.svg" alt="" />
      </div>

      {/* Right side - Form */}
      <div className="mb-20 lg:mb-0">
        <ReusableForm {...signupConfig} onSubmit={handleSignupSubmit} />
      </div>
    </div>
  );
};

export default Signup;
