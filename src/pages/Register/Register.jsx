import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/User/UserActions";

export function Register() {

  const [retypePass, setRetypePass] = useState("");

  const [user, setUser] = useState({
    u_role: 2,
    u_firstname: '',
    u_lastname: '' ,
    u_hashedpassword: '',
    u_usersalt: 'jhgkjsdgf',
    u_email:''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function navigateToLogin() {
    navigate("/login");
  }

  const handleRegister =  () => {
    const data = new FormData();
    data.append('u_email', user['u_email'])
    data.append('u_hashedpassword', user['u_hashedpassword']);
    data.append('u_firstname', user['u_firstname']);
    data.append('u_lastname', user['u_lastname']);
    data.append('u_usersalt', user['u_usersalt']);
    data.append('u_role', user['u_role']);

    dispatch(register(data));

    navigateToLogin()

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
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={user.u_firstname}
                    onChange={(e) => setUser({...user, u_firstname:e.target.value})}
                    className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="John"
                    required
                ></input>
              </div>
              <div>
                <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={user.u_lastname}
                    onChange={(e) => setUser({...user, u_lastname:e.target.value})}
                    className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="Peterson"
                    required
                ></input>
              </div>
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
                  value={user.u_email}
                  onChange={(e) => setUser({...user, u_email:e.target.value})}
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
                  value={user.u_hashedpassword}
                  onChange={(e) => setUser({...user, u_hashedpassword:e.target.value})}
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
