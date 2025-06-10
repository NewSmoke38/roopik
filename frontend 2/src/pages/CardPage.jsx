import { useLocation, Link } from 'react-router-dom';      /// the location from where the generate stuff would come

function CardPage() {
  const location = useLocation();
  const { cardData } = location.state || {};

  if (!cardData) {        /// if in case we dont get the location or data then send this error msg
    return (
      <div className="h-screen w-screen bg-white text-black flex flex-col items-center justify-center px-4">
        <p>No card data available. Please generate a card first.</p>
        <Link to="/" className="text-black underline mt-4">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4 sm:p-8 flex items-center justify-center relative">
      <div className="w-full max-w-3xl mx-auto bg-[#fdf5e6] border-2 border-black rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] relative z-10">
        {/* Window Title Bar */}   
        <div className="bg-[#ff6b6b] border-b-2 border-black p-2 rounded-t-lg flex items-center justify-between">
          <p className="text-black font-bold text-lg">user_profile_in_parallel_universe.txt</p>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border-2 border-black rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center pb-4 border-b-2 border-dashed border-black">
            <h1 className="text-4xl sm:text-5xl font-bold text-black">{cardData.fullname}</h1>
            <p className="text-xl text-gray-700">@{cardData.username}</p>
          </div>

          <div className="flex flex-row gap-4 text-center pb-4 border-b-2 border-dashed border-black">
            <div className="flex-1 bg-[#fdf5e6] border-2 border-black rounded-lg p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-black text-lg">Born</p>
              <p className="text-gray-800">{cardData.Born}</p>
            </div>
            <div className="flex-1 bg-[#fdf5e6] border-2 border-black rounded-lg p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-black text-lg">Marital Status</p>
              <p className="text-gray-800">{cardData.maritalStatus}</p>
            </div>
            <div className="flex-1 bg-[#fdf5e6] border-2 border-black rounded-lg p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-black text-lg">Universe</p>
              <p className="text-gray-800">#{Math.floor(Math.random() * 5901) + 100}</p>
            </div>
          </div>

          <div className="p-4 bg-[#fffacd] border-2 border-black rounded">
             <p className="text-lg text-black text-center">"{cardData.summary}"</p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-black">-- Early Life --</h2>
              <p className="text-gray-800 mt-2 text-lg">{cardData.earlyLife}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">-- Career --</h2>
              <p className="text-gray-800 mt-2 text-lg">{cardData.career}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">-- XP --</h2>
              <p className="text-gray-800 mt-2 text-lg">{cardData.xp}</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link to="/" className="bg-[#ff6b6b] !text-black font-bold border-2 border-black px-6 py-2 rounded hover:bg-[#ff8e8e] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              [ OK ]
            </Link>
          </div>
        </div>
      </div>

     {/* cat cutie <3 */}
      <div className="absolute bottom-4 right-4 w-20 h-20 group">
        <div className="relative w-full h-full">
          {/* cat body */}
          <div className="absolute bottom-0 right-0 w-16 h-12 bg-[#ff6b6b] border-2 border-black rounded-full animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform duration-300">
            {/* cat ears */}
            <div className="absolute -top-3 -left-2 w-5 h-5 bg-[#ff6b6b] border-2 border-black rounded-tl-full transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-1 left-1 w-2 h-2 bg-[#ff8e8e] rounded-full"></div>
            </div>
            <div className="absolute -top-3 -right-2 w-5 h-5 bg-[#ff6b6b] border-2 border-black rounded-tr-full transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-1 right-1 w-2 h-2 bg-[#ff8e8e] rounded-full"></div>
            </div>
            {/* cat eyes */}
            <div className="absolute top-3 left-3 w-3 h-3 bg-black rounded-full group-hover:scale-125 transition-transform duration-300">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-3 right-3 w-3 h-3 bg-black rounded-full group-hover:scale-125 transition-transform duration-300">
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
            </div>
            {/* cat nose */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1.5 h-1 bg-black rounded-full"></div>
            {/* cat mouth */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-black rounded-b-full group-hover:w-3 group-hover:h-2 transition-all duration-300"></div>
            {/* cat whiskers */}
            <div className="absolute top-4 -left-4 w-4 h-0.5 bg-black transform rotate-12 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute top-4 -left-4 w-4 h-0.5 bg-black transform -rotate-12 group-hover:-rotate-12 transition-transform duration-300"></div>
            <div className="absolute top-4 -right-4 w-4 h-0.5 bg-black transform -rotate-12 group-hover:-rotate-12 transition-transform duration-300"></div>
            <div className="absolute top-4 -right-4 w-4 h-0.5 bg-black transform rotate-12 group-hover:rotate-12 transition-transform duration-300"></div>
            {/* cat tail */}
            {/* <div className="absolute -right-6 top-1/2 w-8 h-3 bg-[#ff6b6b] border-2 border-black rounded-full transform rotate-45 animate-pulse group-hover:rotate-90 group-hover:animate-none transition-all duration-300">
              <div className="absolute -right-1 top-1/2 w-2 h-2 bg-[#ff8e8e] rounded-full"></div>
            </div> */}
            {/* cat paws */}
            <div className="absolute -bottom-1 left-2 w-3 h-2 bg-[#ff8e8e] border-2 border-black rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute -bottom-1 right-2 w-3 h-2 bg-[#ff8e8e] border-2 border-black rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage; 