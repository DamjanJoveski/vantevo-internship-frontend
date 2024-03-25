import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/User/UserActions.js";
import {useDispatch, useSelector} from "react-redux";

export function Login() {

  const [user, setUser] = useState({
    email:'',
    password:''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function redirectTo(route) {
    navigate(route);
  }

  const handleLogin = () => {
    const data = new FormData();
    data.append('u_email', user['email'])
    data.append('u_hashedpassword', user['password']);
    dispatch(login(data));
  };

  const userInfo = useSelector(state => state?.user)

  console.log(userInfo.messages.loginStatus) // TREBA DA SE ZAVRSHI

  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen ">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl text-white">
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
                  className="block mb-2 text-sm font-medium text-gray-900 text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
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
                  value={user.password}
                  onChange={(e) => setUser({...user, password:e.target.value})}
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
