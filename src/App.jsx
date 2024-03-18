import { useState } from "react";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

function App() {
  const [isLoginMode, setIsloginMode] = useState(true);

  function handleChange() {
    setIsloginMode(!isLoginMode);
  }

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900">
      {isLoginMode ? (
        <Login handleChange={handleChange} />
      ) : (
        <Register handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;

//     <Routes>
//         <Route path='/' element={} />
//     </Routes>
