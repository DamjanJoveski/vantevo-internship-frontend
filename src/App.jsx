import {Listings} from "./pages/Listings/Listings.jsx";
import {CreateListing} from "./components/CreateListing.jsx";

function App() {

    return(
        <div className='w-full mt-10'>
            <Listings/>
            <CreateListing/>
        </div>
    )
}

export default App

//     <Routes>
//         <Route path='/' element={} />
//     </Routes>