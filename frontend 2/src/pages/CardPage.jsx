import { useLocation, Link } from 'react-router-dom';

function CardPage() {
  const location = useLocation();
  const { cardData } = location.state || {};

  if (!cardData) {
    return (
      <div className="h-screen w-screen bg-white text-black flex flex-col items-center justify-center px-4">
        <p>No card data available. Please generate a card first.</p>
        <Link to="/" className="text-black underline mt-4">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-[#fdf5e6] border-2 border-black rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        {/* Window Title Bar */}
        <div className="bg-[#ff6b6b] border-b-2 border-black p-2 rounded-t-lg flex items-center justify-between">
          <p className="text-black font-bold text-lg">User_Profile.txt</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center pb-4 border-b-2 border-dashed border-black">
            <div>
              <p className="font-bold text-black text-lg">Born</p>
              <p className="text-gray-800">{cardData.Born}</p>
            </div>
            <div>
              <p className="font-bold text-black text-lg">Marital Status</p>
              <p className="text-gray-800">{cardData.maritalStatus}</p>
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
    </div>
  );
}

export default CardPage; 