import { useState } from "react";
import { CalendarDays, MapPin, FileText, Type } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

 const handleSubmit = (e) => {
  e.preventDefault();

  const eventData = {
    ...form,
    id: Date.now(),
  };
   console.log(eventData);
  alert("Event Created Successfully 🎉");

  navigate(`/events/${eventData.id}`, {
    state: eventData,
  });
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/80 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Create Event
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the details to organize your event
          </p>
        </div>

        {/* Title */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Event Title
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <Type className="text-gray-400 mr-3" size={20} />

            <input
              type="text"
              placeholder="Enter event title"
              className="w-full outline-none bg-transparent"
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Description
          </label>

          <div className="flex border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <FileText className="text-gray-400 mr-3 mt-1" size={20} />

            <textarea
              rows="4"
              placeholder="Write event description..."
              className="w-full outline-none bg-transparent resize-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Date */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Event Date
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <CalendarDays className="text-gray-400 mr-3" size={20} />

            <input
              type="date"
               min={new Date().toISOString().split("T")[0]}
              className="w-full outline-none bg-transparent"
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-7">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Location
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <MapPin className="text-gray-400 mr-3" size={20} />

            <input
              type="text"
              placeholder="Enter location"
              className="w-full outline-none bg-transparent"
              onChange={(e) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Button */}
        <button   type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-xl">
          Create Event
        </button>
      </form>
    </div>
  );
}