import React, { useRef } from "react";

function SignUpInput({ handleChange }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleInputChange = (e) => {
    handleChange(e);
  };

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        ref={emailRef}
        onChange={handleInputChange}
        className="border border-[#091d22] rounded-[6px] outline-none pl-[15px] py-[7px] w-full text-white bg-transparent text-[15px] md:text-[20px]"
      />
      <input
        type="password"
        name="password"
        placeholder="Parol"
        ref={passwordRef}
        onChange={handleInputChange}
        className="border border-[#091d22] rounded-[6px] outline-none pl-[15px] py-[7px] w-full text-white bg-transparent text-[15px] md:text-[20px]"
      />
    </>
  );
}

export default SignUpInput;
