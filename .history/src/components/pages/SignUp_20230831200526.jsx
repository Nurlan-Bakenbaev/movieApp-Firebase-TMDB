import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/9fdf8a2d-d6e3-4d7b-8756-3656013869ef/DE-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[500px] mx-auto bg-black/75">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl text-white font-bold">Sign Up</h1>
            <form >
              <input type="email"placeholder="Email" autoComplete="email" />
              <input type="password" placeholder="Password" autoComplete="current-password" />
              <button></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;