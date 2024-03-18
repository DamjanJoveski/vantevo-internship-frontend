import {useState} from "react";
import {ENDPOINT} from "../../consts.js";
export function Register() {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');

        const handleRegister = async () => {
            const data = {username, email ,password}
            try {
                const response = await fetch(`${ENDPOINT}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if(response.ok){
                    console.log('Successfully registered!')
                }
                else{
                    console.log('Registration failed')
                }

                // Reset form fields after successful registration
                setUsername('');
                setPassword('');
                setEmail('');

            } catch (error) {
                console.error('Error occurred during registration:', error);
            }
        };

        return ( //DUMMY FORM, ova da se trgni, da se implementira na Oliver formata
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Register</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
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
                        <div className="mb-4">
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
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input
                                id="email"
                                type="email"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Register;

