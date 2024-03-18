import {useState} from "react";
import {ENDPOINT} from "../../consts.js";
export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const data = {username, password}
        try {
            const response = await fetch(`${ENDPOINT}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if(response.ok){
                console.log('Successfully logged in!')
                //redirect()
            }
            else{
                console.log('login failed')
            }
        }
        catch (error){
            console.log(error.message)
        }
    }


    return ( // DUMMY FORM - ova da se izbrishi treba, da se iskoristi formata od Oliver, ovde go ima kolku za proba i da nema errors
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input
                            id="username"
                            type="text"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            id="password"
                            type="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}