import { useState } from "react";

export function ForgotPassword() {
  const [isCodeSent, setIsCodeSent] = useState(false);

  function getSecurityCode() {
    setIsCodeSent(true);
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen ">
        <div className="lg:w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl text-white">
              Please enter your {isCodeSent ? "Security code" : "Email"}.
            </h1>
            {!isCodeSent ? (
              <form className="space-y-4 md:space-y-6">
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
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="name@company.com"
                    required
                  ></input>
                  <br />
                  <button
                    className="w-full font-bold text-white bg-gray-500 p-2 rounded-lg hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault(), getSecurityCode();
                    }}
                  >
                    Get code
                  </button>
                </div>
              </form>
            ) : (
              ""
            )}

            {isCodeSent ? (
              <form>
                <div>
                  <label
                    htmlFor="security-code"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Security code
                  </label>
                  <input
                    type="text"
                    name="security-code"
                    id="security-code"
                    placeholder="Enter your code"
                    className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    required
                  ></input>
                  <br />
                  <button
                    type="submit"
                    className="w-full font-bold text-white bg-gray-500 p-2 rounded-lg hover:bg-gray-600"
                  >
                    Submit code
                  </button>
                  <br />
                </div>
              </form>
            ) : (
              ""
            )}
            {isCodeSent ? (
              <p className="text-white">
                Your code has been sent. Check your email. If you didn&apos;t
                receive the code click here.{" "}
                <button className="font-bold hover:underline">
                  Resend code
                </button>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
