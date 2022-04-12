import React from "react";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2">
        <div className="text-center space-y-2">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Touhid</p>
            <p className="text-gray-500 font-medium">softzino</p>
          </div>
          <button className="px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold">
            Visit now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
