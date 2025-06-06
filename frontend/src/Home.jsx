
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullname,
      username,
      roles: roleInput.split(",").map((r) => r.trim()),
    };

    try {
      const res = await fetch("http://localhost:3000/api/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to generate card");
      const data = await res.json();
      navigate("/card", { state: { cardData: data } });
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
            Already generated? <a href="#" className="underline text-black">Start over</a>
          </p>
        </form>
      </div>
    </div>
  );
}