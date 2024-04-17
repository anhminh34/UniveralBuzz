import * as React from "react";

function Button({ children, className }) {
  return (
    <button className={`justify-center py-4 text-white whitespace-nowrap ${className}`}>
      {children}
    </button>
  );
}

function InputField({ placeholder, className }) {
  return (
    <div className={`justify-center py-3.5 bg-zinc-300 ${className}`}>
      {placeholder}
    </div>
  );
}

function MyComponent() {
  return (
    <div className="pt-20 pr-7 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-32 text-black max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col items-start pl-20 max-md:pl-5 max-md:max-w-full">
              <h1 className="text-7xl max-md:max-w-full max-md:text-4xl">
                UNIVERSAL BUZZ
              </h1>
              <p className="mt-6 text-4xl font-bold max-md:max-w-full">
                Sacramento State <br /> International Students
              </p>
            </header>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c21893c139ae660a9a2078cdb20d51727270eb800471cef980f09be1cbcdcbf?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
              alt="Sacramento State International Students"
              className="mt-14 w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
            <form className="flex flex-col px-14 py-20 text-2xl bg-emerald-800 rounded-3xl text-neutral-500 max-md:px-5 max-md:max-w-full">
              <h2 className="text-4xl text-white max-md:max-w-full">
                Create an Account
              </h2>
              <InputField
                placeholder="Username"
                className="mt-14 max-md:mt-10 max-md:max-w-full"
              />
              <InputField
                placeholder="Email Address"
                className="mt-8 max-md:max-w-full"
              />
              <InputField
                placeholder="Password"
                className="mt-8 max-md:max-w-full"
              />
              <InputField
                placeholder="Confirm Password"
                className="mt-8 max-md:max-w-full"
              />
              <Button className="mt-8 px-16 bg-black max-md:px-5 max-md:max-w-full">
                Register
              </Button>
              <a href="#" className="self-center mt-7 mb-3.5 text-lg text-orange-200">
                Go back
              </a>
            </form>
            <div className="self-end mt-20 text-3xl text-teal-950 max-md:mt-10">
              BACK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}