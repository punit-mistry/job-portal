export default function Hero() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-600 h-96 rounded-t-2xl shadow-2xl">
        <div className="flex flex-col items-center px-4 py-8 text-center gap-3 max-w-xl mx-auto w-full">
            <h1 className="text-4xl font-bold text-white">Find your Next <br/>dream job</h1> 
            <div className="flex  items-center  gap-2 w-full ">
                <input type="search" className="border w-full py-2 px-3 rounded-md bg-white text-black" placeholder="Search Phrase..." />
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Search</button>
            </div>
        </div>
    </div>
  );
}