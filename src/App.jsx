import { Listings } from "./pages/Listings/Listings.jsx";
import { CreateListing } from "./components/CreateListing.jsx";
import { EditListing } from "./components/EditListing.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Register } from "./pages/Register/Register.jsx";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword.jsx";
import { ListingDetails } from "./pages/Listing/Listing.jsx";
import { Home } from "./pages/Home/Home.jsx";

import { useEffect, useState } from "react";

function App() {
  const ls = JSON.parse(localStorage.getItem("store")) || {};
  const accessToken = ls.user?.access_token;
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (
      !accessToken &&
      //   ADD /admin/ for admin panel routes 
      ["/admin/listings", "/admin/create-listings","/admin/edit-listings" ,"/admin/listing/"].some((path) =>
        window.location.pathname.startsWith(path)
      )
    ) {
      navigate("/login");
    } else {
      setReady(true);
    }
  }, [accessToken, navigate]);

  return (
    <div className="w-full bg-gray-900">
      {ready && (
        <Routes>
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin routes */}
          <Route path="/admin/create-listings" element={<CreateListing />} />
          <Route path="/admin/edit-listings" element={<EditListing />} />
          <Route path="/admin/listings" element={<Listings />} />
          <Route path="/admin/listing/:id" element={<ListingDetails />} />

          {/* User routes */}
          <Route path="/ls" element={<Listings />} />
          <Route path="/" element={<Home />} />


        </Routes>
      )}
    </div>
  );
}

export default App;
