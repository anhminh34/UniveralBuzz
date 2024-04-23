import * as React from "react";

function LoginForm() {
  return (
    <form className="flex flex-col self-stretch px-12 py-20 my-auto w-full text-2xl bg-emerald-800 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-4xl text-white">LOGIN</h2>
      <label htmlFor="username" className="sr-only">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="justify-center py-4 mt-14 whitespace-nowrap bg-zinc-300 text-neutral-500 max-md:mt-10"
        placeholder="Username"
        aria-label="Username"
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="justify-center py-3.5 mt-12 whitespace-nowrap bg-zinc-300 text-neutral-500 max-md:mt-10"
        placeholder="Password"
        aria-label="Password"
      />
      <button
        type="submit"
        className="justify-center items-center px-16 py-4 mt-10 text-white whitespace-nowrap bg-black max-md:px-5 max-md:mt-10"
      >
        Login
      </button>
      <div className="flex gap-2 self-center mt-9 text-base">
        <p className="grow text-white">Don't have an account?</p>
        <a href="#" className="text-orange-200">
          Register
        </a>
      </div>
    </form>
  );
}

function MyComponent() {
  return (
    <main className="pt-20 bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa12dfb91641dd7fbe587fbff2268a68982dd2b68e740649dba2335aa757e4e?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
              alt="Sacramento State International Students"
              className="mt-14 w-full aspect-[1.27] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </section>
        <aside className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
          <LoginForm />
        </aside>
      </div>
    </main>
  );
}
export default MyComponent;