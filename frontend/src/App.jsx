import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [roleInput, setRoleInput] = useState('');         // makig containers for data inside my app
  const [showDropdown, setShowDropdown] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [cardData, setCardData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const roles = [
    "Terminal Gremlin",
    "Sticker Wizard",
    "Club DJ",
    "HTML Priest",
    "CSS Witch",
    "Open Source Druid",
    "Ship Captain",
    "Localhost Ranger",
    "Pixel Nomad",
    "Keyboard Monk",
    "Bug Whisperer",
    "PR Bard",
    "Sudo Strategist",
    "Infinite Looper",
    "Cosmic Cutie",
    "Softcore Hacker",
    "Terminal Sweetheart",
    "Backend Sorcerer",
    "Frontend Alchemist",
    "AI/ML Researcher",
    "Hardware Tinkerer",
    "PCB Designer",
    "React Developer",
    "DevOps Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Analyst",
    "AI and Data Scientist",
    "Android Developer",
    "iOS Developer",
    "Blockchain Developer",
    "Software Architect",
    "Cyber Security Specialist",
    "UX Designer",
    "Game Developer",
    "Technical Writer"
  ];


  useEffect(() => {                            // useEffect here does the magic of when a user will click outside the role input box the dropdown will shut down and vanish
    const handleClickOutside = (event) => {
      if (!event.target.closest('.role-input-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);    // hey stop listening for those mouse clicks now, because we don’t need it anymore
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  // handleSubmit function to POST to backend and set cardData
  const handleSubmit = async (e) => {
    e.preventDefault();      // this stops the form from doing the usual browser refresh when clicked submit 
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
      setSubmitted(true);
      console.log(data); // TEMP: check output
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="h-screen w-screen bg-white text-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white text-black p-8 border border-black border-dashed shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">roopik</h1>

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
            placeholder="@username"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative role-input-container">
            <input
              type="text"
              placeholder="Your Roles"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              value={roleInput}
              onChange={(e) => setRoleInput(e.target.value)}
              onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 rounded mt-1 p-2 flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                {roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm cursor-pointer transition"
                    onMouseDown={() => {
                      const newRoles = roleInput ? roleInput.split(',').map(r => r.trim()) : [];
                      if (!newRoles.includes(role)) {
                        newRoles.push(role);
                        setRoleInput(newRoles.join(', '));
                      }
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
            Already generated? <a href="#" className="underline text-black" onClick={(e) => {
              e.preventDefault();
              setFullname('');
              setUsername('');
              setRoleInput('');
              setCardData(null);
              setSubmitted(false);
            }}>Start over</a>
          </p>
        </form>
        {submitted && (
          <div>
            {/* Card with two boxes */}
            <div className="mt-6 p-4 border border-gray-300 rounded shadow-sm">
              {/* Example card content */}
              <h2 className="text-xl font-semibold mb-2">{cardData?.fullname}</h2>
              <p className="text-gray-700">@{cardData?.username}</p>
              <div className="mt-4">
                <h3 className="font-semibold">Roles:</h3>
                <ul className="list-disc list-inside">
                  {cardData?.roles?.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
