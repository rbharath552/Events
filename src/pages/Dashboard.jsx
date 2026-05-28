import { useState } from "react";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");

  const addEvent = () => {
    if (!title) return;
    setEvents([...events, { title, joined: false }]);
    setTitle("");
  };

  const toggleRSVP = (index) => {
    const updated = [...events];
    updated[index].joined = !updated[index].joined;
    setEvents(updated);
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-blue-200 p-6">

  
  <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text mb-8">
    My Events
  </h1>

  
  <div className="max-w-xl mx-auto flex gap-3 mb-8 bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-md border border-gray-200">
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      placeholder="Enter event title..."
    />

    <button
      onClick={addEvent}
      className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 shadow-md hover:shadow-lg transition duration-300"
    >
      Add
    </button>
  </div>

  
  <div className="max-w-xl mx-auto space-y-4">
    {events.map((event, index) => (
      <div
        key={index}
        className="flex justify-between items-center p-5 rounded-2xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-xl transition duration-300"
      >
        <span className="text-gray-800 font-medium">
          {event.title}
        </span>

        <button
          onClick={() => toggleRSVP(index)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition duration-300 shadow ${
            event.joined
              ? "bg-emerald-500 hover:bg-emerald-600"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          {event.joined ? "Joined" : "Join"}
        </button>
      </div>
    ))}
  </div>
</div>
  );
}