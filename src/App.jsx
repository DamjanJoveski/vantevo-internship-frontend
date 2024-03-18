import {Login} from "./pages/Login/Login.jsx";
import {Register} from "./pages/Register/Register.jsx";

function App() {
    const ENDPOINT = 'http://127.0.0.1:5000/login';

    return(
        <div className='w-full mt-10'>
            <h1 className='text-3xl text-blue-600 w-80 mx-auto'>Hello fellow interns</h1>
            <Login ENDPOINT={ENDPOINT}/>
            <Register ENDPOINT={ENDPOINT}/>
        </div>
    )
}

export default App

//     <Routes>
//         <Route path='/' element={} />
//     </Routes>