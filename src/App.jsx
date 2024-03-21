import { Listings } from "./pages/Listings/Listings.jsx";
import { CreateListing } from "./components/CreateListing.jsx";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Register } from "./pages/Register/Register.jsx";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword.jsx";
import { ListingDetails } from "./pages/Listing/Listing.jsx";

function App() {
  return (
    <div className="w-full  bg-gray-900">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/listings" element={<Listings />} />
        <Route path="/create-listings" element={<CreateListing />}></Route>
        <Route path="/listing/:id" element={<ListingDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
