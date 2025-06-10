import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    
    // Validate inputs
    if (!fullname.trim() || !username.trim() || !roleInput.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      //early life summaries
      const earlyLifeSummaries = [
        "Started coding at age 8, building simple games in Scratch.\nDiscovered the magic of algorithms in high school math class.\nCreated first website at 15, never looked back.\nFound passion in open source contributions.\nBuilt a gaming community that reached 10,000 members.\nWon regional coding competitions three years in a row.\nStarted a tech blog that went viral in the developer community.\nMentored younger students in programming basics.",
        "Born with a keyboard in hand, first computer at age 5.\nBuilt first computer from spare parts at age 12.\nMastered BASIC before learning to ride a bike.\nStarted a tech blog that went viral.\nCreated a home automation system for the entire house.\nDeveloped a popular Minecraft mod with 100,000+ downloads.\nFounded a coding club that spread to 5 schools.\nBuilt a robot that won the state science fair.",
        "Grew up in a family of engineers, surrounded by tech.\nBuilt robots for science fairs every year.\nWon coding competitions in middle school.\nStarted freelancing at 16, building websites.\nCreated a mobile app that helped local businesses.\nDeveloped a learning platform for coding education.\nBuilt a social network for young developers.\nStarted a YouTube channel teaching programming.",
        "First computer was a hand-me-down from older sibling.\nLearned HTML from library books at age 10.\nCreated a gaming community at 14 that grew to 50,000 users.\nBuilt first app before graduating high school.\nDeveloped a popular browser extension.\nCreated a coding tutorial website.\nBuilt a game that was featured in app stores.\nStarted a tech podcast with friends.",
        "Started with Scratch programming at age 7.\nBuilt a home automation system at 13.\nCreated a popular Minecraft mod with 500,000 downloads.\nFounded a coding club in school.\nDeveloped a mobile game that went viral.\nBuilt a social platform for developers.\nCreated an AI project that won science fair.\nStarted a tech startup in high school."
      ];

      // career summaries
      const careerSummaries = [
        "Led development of award-winning apps used by millions.\nPioneered new frameworks in the industry.\nBuilt scalable systems for Fortune 500 companies.\nMentored 100+ junior developers to success.\nArchitected cloud infrastructure for startups.\nCreated open source tools used by developers worldwide.\nSpearheaded digital transformation projects.\nOptimized systems for maximum performance.",
        "Built scalable systems for Fortune 500 companies.\nMentored 100+ junior developers to success.\nCreated open source tools used by millions.\nSpearheaded digital transformation projects.\nDeveloped AI solutions for healthcare.\nArchitected cloud infrastructure for startups.\nBuilt gaming engines from scratch.\nOptimized systems for performance.",
        "Created open source tools used by millions.\nSpearheaded digital transformation projects.\nDeveloped AI solutions for healthcare.\nArchitected cloud infrastructure for startups.\nBuilt gaming engines from scratch.\nOptimized systems for performance.\nLed development of award-winning apps.\nPioneered new frameworks in the industry.",
        "Developed AI solutions for healthcare.\nArchitected cloud infrastructure for startups.\nBuilt gaming engines from scratch.\nOptimized systems for performance.\nLed development of award-winning apps.\nPioneered new frameworks in the industry.\nBuilt scalable systems for Fortune 500.\nMentored 100+ junior developers.",
        "Built gaming engines from scratch.\nOptimized systems for performance.\nLed development of award-winning apps.\nPioneered new frameworks in the industry.\nBuilt scalable systems for Fortune 500.\nMentored 100+ junior developers.\nCreated open source tools used by millions.\nSpearheaded digital transformation projects."
      ];

      // XP summaries
      const xpSummaries = [
        "Level 42 Developer with 10+ years experience.\nExpert in full-stack and cloud technologies.",
        "Senior Engineer with 8 years in AI/ML.\nSpecialized in computer vision and NLP.",
        "Lead Developer with 12 years in fintech.\nMaster of security and blockchain systems.",
        "Principal Engineer with 15 years experience.\nArchitect of distributed systems.",
        "Tech Lead with 7 years in mobile development.\nExpert in iOS and Android ecosystems."
      ];

      // Prepare the data
      const cardData = {
        fullname: fullname.trim(),
        username: username.trim(),
        roles: roleInput.split(',').map(role => role.trim()),
        Born: `${Math.floor(Math.random() * 28 + 1)}-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(Math.random() * 30 + 1970)}`,
        maritalStatus: ['Single', 'Married', 'Divorced', 'It\'s Complicated', 'Taken by a Bug', 'Married to the Terminal'][Math.floor(Math.random() * 6)],
        summary: "A mysterious developer exploring the digital realms.",
        earlyLife: earlyLifeSummaries[Math.floor(Math.random() * earlyLifeSummaries.length)],
        career: careerSummaries[Math.floor(Math.random() * careerSummaries.length)],
        xp: xpSummaries[Math.floor(Math.random() * xpSummaries.length)]
      };

      // navigating to card page with the data
      navigate('/card', { state: { cardData } });
    } catch (error) {
      console.error('Error generating card:', error);
      alert('Failed to generate card. Please try again.');
    }
  };


  // bg hover effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="min-h-screen w-full p-4 sm:p-8 flex items-center justify-center relative overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => {
          const cellX = (i % 12) * (window.innerWidth / 12);
          const cellY = Math.floor(i / 12) * (window.innerHeight / 12);
          const distanceX = Math.abs(mousePosition.x - cellX);
          const distanceY = Math.abs(mousePosition.y - cellY);
          const isHovered = distanceX < 100 && distanceY < 100;
          
          return (
            <div 
              key={i}
              className="transition-all duration-300 ease-out"
              style={{
                transform: isHovered 
                  ? `scale(1.5) translateZ(20px)`
                  : 'scale(1) translateZ(0)',
                opacity: isHovered ? 0.3 : 0.05,
                boxShadow: isHovered 
                  ? '0 4px 8px rgba(255,107,107,0.3)'
                  : 'none',
                transformStyle: 'preserve-3d',
                background: isHovered 
                  ? 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)'
                  : 'rgba(0,0,0,0.05)',
                border: isHovered ? '1px solid rgba(255,107,107,0.3)' : 'none',
                borderRadius: isHovered ? '4px' : '0'
              }}
            />
          );
        })}
      </div>

      <div className="w-full max-w-lg mx-auto bg-[#fdf5e6] border-2 border-black rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] relative z-10">
        <div className="bg-[#ff6b6b] border-b-2 border-black p-2 rounded-t-lg flex items-center justify-between">
          <p className="text-black font-bold text-lg">user_on_earth.exe</p>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <h1 className="text-4xl font-bold mb-2 text-center text-black">roopik</h1>
          <p className="text-gray-500 text-sm text-center italic mb-6">
            Different <span className="relative group">
              <span className="cursor-help border-b border-dotted border-[#e64545]">roops</span>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#ff6b6b] text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                roop means  form/appearance  in Sanskrit
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#ff6b6b] border-r-2 border-b-2 border-black"></span>
              </span>
            </span> of people in the Parallel Universe
          </p>

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
              className="w-full bg-[#ff6b6b] text-black font-bold border-2 border-black px-6 py-2 rounded hover:bg-[#ff8e8e] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-opacity-50"
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