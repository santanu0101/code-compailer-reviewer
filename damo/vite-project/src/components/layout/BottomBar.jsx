export default function BottomBar() {
    return (
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center text-sm">
          <button className="mr-4 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            1973 Online
          </button>
          <button className="mr-4">61.3K</button>
          <button className="mr-4">1.3K</button>
        </div>
        <div>
          <button className="px-4 py-1 bg-gray-700 rounded text-sm">
            Source
          </button>
        </div>
      </div>
    );
  }
  