import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/User/UserActions";
import { useDispatch } from "react-redux";

export function Navbar({ isLoggedIn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <div className="flex gap-4 font-bold bg-gray-500 p-4 justify-end">
      {isLoggedIn ? (
        <>
          <Link to="/listings" className="bg-blue-600 px-2 py-1 rounded-lg">
            Listings
          </Link>
          <Link
            to="/create-listings"
            className="bg-blue-600 px-2 py-1 rounded-lg"
          >
            Create Listings
          </Link>
          <Link
            className="bg-blue-600 px-2 py-1 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </>
      ) : (
        <Link to="/login" className="bg-blue-600 px-2 py-1 rounded-lg">
          Login
        </Link>
      )}
    </div>
  );
}
