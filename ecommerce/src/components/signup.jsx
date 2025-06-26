import React ,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find((u) => u.username === username);
    if (userExists) {
      toast.error('Username already exists');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    toast.success('Signup successful! Please log in.');
    navigate('/login');
  };

 
        return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          className="block w-full mb-4 px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-4 px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup