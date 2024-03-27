import { useState } from "react";
import { ENDPOINT } from "../../consts.js";
import { useNavigate } from "react-router-dom";


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function redirectTo(route) {
    navigate(route);
  }

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
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl text-white">
              Log in to your account
            </h1>
              <button className="bg-red-500 text-white p-2" onClick={getSal}>GET DATA</button>
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
                  className="block mb-2 text-sm font-medium text-gray-900 text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="name@company.com"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 text-white"
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
                  className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                ></input>
              </div>
              <button
                type="submit"
                className="w-full font-bold text-white bg-gray-500 p-3 rounded-lg hover:bg-gray-600"
              >
                Log in
              </button>
              <p className="flex justify-center text-white">
                Don&apos;t have an account?&nbsp;
                <button
                  className="font-bold hover:underline"
                  onClick={() => redirectTo("/register")}
                >
                  Register
                </button>
              </p>
              <p className="flex justify-center text-white">
                <button
                  className="font-bold hover:underline"
                  onClick={() => redirectTo("/forgot-password")}
                >
                  Forgot password?
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
