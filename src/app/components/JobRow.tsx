export function JobRow() {
    return (
      <div className="bg-white hover:shadow-lg rounded-lg flex flex-col gap-4 hover:cursor-pointer transition-shadow duration-300 ">
        <div className="flex gap-2 items-center justify-between px-4 py-5 sm:px-6">
            <img
              src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Amazon-500x500.png"
              alt="logo"
              className="w-12 h-12 rounded-full"
            />
          <div className="flex flex-col w-full mt-2">
            <div className="text-gray-600">Amazone</div>
            <div className="font-extrabold">Product Manager</div>
            <div className="flex  flex-col md:flex-row md:justify-between  ">
              <div className="text-sm text-gray-600">
                Remote &middot; New York, IN &middot; Full Time
              </div>
              <div className="text-sm text-gray-600">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  