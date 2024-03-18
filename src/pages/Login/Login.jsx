import { useState } from "react";

export const ENDPOINT = "http://127.0.0.1:5000/";

export function Login({ handleChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { email, password };
    try {
      const response = await fetch(`${ENDPOINT}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Successfully logged in!");
        //redirect()
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen ">
        <div className="lg:w-full bg-white rounded-lg shadow dark:border md:mt-0   sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <button
                type="submit"
                className="w-full font-bold text-white bg-gray-500 p-3 rounded-lg"
              >
                Log in
              </button>
              <p className="flex justify-center text-white">
                Don&apos;t have an account?&nbsp;
                <button
                  className="font-bold hover:underline"
                  onClick={handleChange}
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
