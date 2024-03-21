import { useState } from "react";
import { ENDPOINT } from "../../consts";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/login");
  }

  const handleRegister = async () => {
    const data = { email, password, retypePass };
    try {
      const response = await fetch(`${ENDPOINT}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Successfully registered!");
      } else {
        console.log("Registration failed");
      }

      // Reset form fields after successful registration
      setEmail("");
      setPassword("");
      setRetypePass("");
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold  md:text-2xl text-white">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="name@company.com"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
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
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={retypePass}
                  onChange={(e) => setRetypePass(e.target.value)}
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                ></input>
              </div>
              <button
                type="submit"
                className="w-full font-bold text-white bg-gray-500 p-3 rounded-lg hover:bg-gray-600"
              >
                Create an account
              </button>
              <p className="flex justify-center text-white">
                Already have an account?&nbsp;
                <button
                  className="font-bold hover:underline"
                  onClick={navigateToLogin}
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
