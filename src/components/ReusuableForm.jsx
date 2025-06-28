import React, { useState } from "react";

const ReusableForm = ({
  title,
  fields,
  submitButton,
  socialLogins = [],
  onSubmit,
  className = "",
}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className={`w-full px-[30px] lg:px-[120px] ${className}`}>
      <h2 className="text-[32px] mb-[24px] font-bold text-gray-800 text-center">
        {title}
      </h2>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.name || index}
            className={
              field.type === "row"
                ? "flex flex-col md:flex-row items-start md:items-end gap-4"
                : ""
            }
          >
            {field.type === "row" ? (
              // Handle row fields (like First Name + Last Name)
              field.fields.map((subField) => (
                <div key={subField.name} className="w-full md:flex-1">
                  {subField.label && (
                    <label className="block text-lg font-bold text-gray-700 mb-1">
                      {subField.label}
                    </label>
                  )}
                  <input
                    type={subField.type || "text"}
                    name={subField.name}
                    placeholder={subField.placeholder}
                    value={formData[subField.name] || ""}
                    onChange={(e) =>
                      handleInputChange(subField.name, e.target.value)
                    }
                    className="w-full h-[58px] px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-none focus:border-none placeholder:text-sm"
                    required={subField.required}
                  />
                </div>
              ))
            ) : (
              // Handle single fields
              <div>
                <label className="block text-lg font-bold leading-[1.6] text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  className="w-full px-3 py-2 h-[55px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-none focus:border-none"
                  required={field.required}
                />
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 flex items-center justify-center gap-2 h-[55px] min-w-[124px]"
        >
          {submitButton.text}
          <span>→</span>
        </button>
      </div>

      {socialLogins.length > 0 && (
        <>
          <div className="mt-6 text-center">
            <div className="relative my-14">
              <div className="w-full h-[1px] bg-[#94A3B8]/70"></div>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 text-sm text-gray-500 bg-white whitespace-nowrap">
                {submitButton.socialText || "Sign up with"}
              </span>
            </div>
            <div className="mt-[34px] flex flex-col items-center md:flex-row gap-6 md:gap-3 justify-center">
              {socialLogins.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialLogin(social.name)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-50 transition duration-200 w-[220px] min-h-[50px]"
                >
                  {social.icon}
                  <span className="text-base">{social.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReusableForm;
