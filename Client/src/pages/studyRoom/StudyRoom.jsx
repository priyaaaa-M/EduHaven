import { useState, useEffect } from "react";
import { User, Headphones, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import Ai from "./AiChatbot.jsx";
import Calender from "./CalendarComponent.jsx";
import TimerComponent from "./TimerComponent.jsx";
import NotesComponent from "./NotesComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";
import StudyStats from "./StudyStats.jsx";

function StudyRoom() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedId, setSelectedId] = useState(""); // for AI. donot remove

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* nav-bar  */}
      <div className="flex justify-between items-center">
        <button className="flex gap-3 font-bold text-lg items-center">
          <ExternalLink />
          Links
        </button>
        <h1 className="text-2xl font-bold">Stay hungry; stay foolish.</h1>
        <div className="flex items-center gap-6">
          {/* ai */}
          <Ai onShowId={setSelectedId} />
          {!isLoggedIn && (
            <Link
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2"
              to="/authenticate"
            >
              <User className="w-5 h-5" />
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="flex gap-8 w-full h-auto">
        <div className="flex-1 h-100 flex flex-col gap-8">
          <div className="flex">
            <TimerComponent />
            <StudyStats />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            <NotesComponent />
            <TodoComponent />
          </div>
        </div>
        <Calender />
      </div>

      {/* Discussion Rooms */}
      <h1 className="text-2xl font-bold">Connect with friends</h1>
      <div className="grid grid-cols-3 gap-8">
        {["Room 1", "Room 2", "Room 3"].map((room) => (
          <div key={room} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">{room}</h3>
            <p className="text-gray-400 text-sm mb-4">4 students studying</p>
            <button className="bg-gray-700 hover:bg-purple-700 px-4 py-2 rounded-lg w-full flex gap-3 transition-all duration-200 ease-in-out">
              <Headphones />
              Join Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyRoom;
