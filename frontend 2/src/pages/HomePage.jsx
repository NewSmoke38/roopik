import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [roleInput, setRoleInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const roles = [
    "Terminal Gremlin", "Sticker Wizard", "Club DJ", "HTML Priest", "CSS Witch",
    "Open Source Druid", "Ship Captain", "Localhost Ranger", "Pixel Nomad", "Keyboard Monk",
    "Bug Whisperer", "PR Bard", "Sudo Strategist", "Infinite Looper", "Cosmic Cutie",
    "Softcore Hacker", "Terminal Sweetheart", "Backend Sorcerer", "Frontend Alchemist",
    "AI/ML Researcher", "Hardware Tinkerer", "PCB Designer", "React Developer",
    "DevOps Engineer", "Full Stack Developer", "AI Engineer", "Data Analyst",
    "AI and Data Scientist", "Android Developer", "iOS Developer", "Blockchain Developer",
    "Software Architect", "Cyber Security Specialist", "UX Designer", "Game Developer", "Technical Writer"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.role-input-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { fullname, username, roles: roleInput.split(',').map(r => r.trim()) };
    try {
      console.log('Sending payload:', payload);
      const res = await fetch('http://localhost:3000/api/v1/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to generate card');
      const data = await res.json();
      console.log('Received data:', data);
      navigate('/card', { state: { cardData: data } });
    } catch (err) {
      console.error('Error generating card:', err.message);
      alert('Failed to generate card. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto bg-[#fdf5e6] border-2 border-black rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <div className="bg-[#ff6b6b] border-b-2 border-black p-2 rounded-t-lg flex items-center justify-between">
          <p className="text-black font-bold text-lg">Roopik_Card_Generator.exe</p>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">roopik</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              className="w-full p-2 border-2 border-black rounded text-black"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
              className="w-full p-2 border-2 border-black rounded text-black"
            />
            <div className="relative role-input-container">
              <input
                type="text"
                value={roleInput}
                onChange={(e) => setRoleInput(e.target.value)}
                placeholder="Your Roles"
                className="w-full p-2 border-2 border-black rounded text-black"
                onFocus={() => setShowDropdown(true)}
              />
              {showDropdown && (
                <ul className="absolute z-10 w-full bg-white border-2 border-black rounded mt-2 p-2 flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                  {roles.map((role, idx) => (
                    <li
                      key={idx}
                      className="px-3 py-1 rounded-full border-2 border-black bg-[#ff6b6b] hover:bg-[#ff8e8e] text-black font-medium text-sm cursor-pointer transition"
                      onMouseDown={() => {
                        const newRoles = roleInput ? roleInput.split(',').map(r => r.trim()).filter(Boolean) : [];
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
              className="w-full bg-[#ff6b6b] text-black font-bold border-2 border-black px-6 py-2 rounded hover:bg-[#ff8e8e] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Generate Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 