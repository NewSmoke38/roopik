import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [roleInput, setRoleInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [cardData, setCardData] = useState(null);
  const roles = ['Developer', 'Designer', 'Manager', 'Writer', 'Researcher'];
  // handleSubmit function to POST to backend and set cardData
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullname,
      username,
      roles: roleInput.split(',').map(r => r.trim()),
    };

    try {
      const res = await fetch('http://localhost:3000/api/v1/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to generate card');
      const data = await res.json();
      setCardData(data);
      console.log(data); // TEMP: check output
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Join Roopik</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Your Roles"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              value={roleInput}
              onChange={(e) => setRoleInput(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // delay to allow click
            />
            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto">
                {roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => {
                      const newRoles = roleInput ? roleInput.split(',').map(r => r.trim()) : [];
                      if (!newRoles.includes(role)) {
                        newRoles.push(role);
                        setRoleInput(newRoles.join(', '));
                      }
                      setShowDropdown(false);
                    }}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded hover:bg-gray-900 transition"
          >
            Generate Card
          </button>
          <p className="text-center text-sm text-gray-600">
            Already generated? <a href="#" className="underline text-black">Start over</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
