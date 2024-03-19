import { useState } from "react";

export function ForgotPassword() {
  const [isCodeSent, setIsCodeSent] = useState(false);

  function getSecurityCode() {
    setIsCodeSent(true);
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen ">
        <div className="lg:w-full bg-white rounded-lg shadow dark:border md:mt-0   sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Please enter your {isCodeSent ? "Security code" : "Email"}.
            </h1>
            {!isCodeSent ? (
              <form className="space-y-4 md:space-y-6">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Security code
                  </label>
                  <input
                    type="text"
                    name="security-code"
                    id="security-code"
                    placeholder="Enter your code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
