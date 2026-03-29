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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Events</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Event Title"
        />
        <button
          onClick={addEvent}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {events.map((event, index) => (
        <div key={index} className="p-4 border mb-2 flex justify-between">
          <span>{event.title}</span>
          <button
            onClick={() => toggleRSVP(index)}
            className={`px-3 py-1 rounded ${
              event.joined ? "bg-green-500" : "bg-gray-400"
            } text-white`}
          >
            {event.joined ? "Joined" : "RSVP"}
          </button>
        </div>
      ))}
    </div>
  );
}