import { useState } from "react";
import { CalendarDays, MapPin, FileText, Type } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

   if (!form.title.trim()) {
    newErrors.title = "Event title is required";
  }

  if (!form.description.trim()) {
    newErrors.description = "Description is required";
  }

  if (!form.date) {
    newErrors.date = "Date is required";
  }

  if (!form.location.trim()) {
    newErrors.location = "Location is required";
  }
  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

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

  <div
    className={`flex items-center rounded-xl px-4 py-3 transition ${
      errors.title
        ? "border border-red-500"
        : "border border-gray-300"
    } focus-within:ring-2 focus-within:ring-indigo-500`}
  >
    <Type className="text-gray-400 mr-3" size={20} />

    <input
      type="text"
      placeholder="Enter event title"
      value={form.title}
      className="w-full outline-none bg-transparent"
      onChange={(e) => {
        setForm({
          ...form,
          title: e.target.value,
        });

        setErrors({
          ...errors,
          title: "",
        });
      }}
    />
  </div>

  {errors.title && (
    <p className="text-red-500 text-sm mt-1">
      {errors.title}
    </p>
  )}
</div>

        {/* Description */}
      <div className="mb-5">
  <label className="text-sm font-medium text-gray-700 mb-2 block">
    Description
  </label>

  <div
    className={`flex rounded-xl px-4 py-3 transition ${
      errors.description
        ? "border border-red-500"
        : "border border-gray-300"
    } focus-within:ring-2 focus-within:ring-indigo-500`}
  >
    <FileText className="text-gray-400 mr-3 mt-1" size={20} />

    <textarea
      rows="4"
      placeholder="Write event description..."
      value={form.description}
      className="w-full outline-none bg-transparent resize-none"
      onChange={(e) => {
        setForm({
          ...form,
          description: e.target.value,
        });

        setErrors({
          ...errors,
          description: "",
        });
      }}
    />
  </div>

  {errors.description && (
    <p className="text-red-500 text-sm mt-1">
      {errors.description}
    </p>
  )}
</div>

        {/* Date */}
    <div className="mb-5">
  <label className="text-sm font-medium text-gray-700 mb-2 block">
    Event Date
  </label>

  <div
    className={`flex items-center rounded-xl px-4 py-3 transition ${
      errors.date
        ? "border border-red-500"
        : "border border-gray-300"
    } focus-within:ring-2 focus-within:ring-indigo-500`}
  >
    <CalendarDays className="text-gray-400 mr-3" size={20} />

    <input
      type="date"
      min={new Date().toISOString().split("T")[0]}
      value={form.date}
      className="w-full outline-none bg-transparent"
      onChange={(e) => {
        setForm({
          ...form,
          date: e.target.value,
        });

        setErrors({
          ...errors,
          date: "",
        });
      }}
    />
  </div>

  {errors.date && (
    <p className="text-red-500 text-sm mt-1">
      {errors.date}
    </p>
  )}
</div>

        {/* Location */}
   <div className="mb-7">
  <label className="text-sm font-medium text-gray-700 mb-2 block">
    Location
  </label>

  <div
    className={`flex items-center rounded-xl px-4 py-3 transition ${
      errors.location
        ? "border border-red-500"
        : "border border-gray-300"
    } focus-within:ring-2 focus-within:ring-indigo-500`}
  >
    <MapPin className="text-gray-400 mr-3" size={20} />

    <input
      type="text"
      placeholder="Enter location"
      value={form.location}
      className="w-full outline-none bg-transparent"
      onChange={(e) => {
        setForm({
          ...form,
          location: e.target.value,
        });

        setErrors({
          ...errors,
          location: "",
        });
      }}
    />
  </div>

  {errors.location && (
    <p className="text-red-500 text-sm mt-1">
      {errors.location}
    </p>
  )}
</div>

        {/* Button */}
        <button   type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-xl">
          Create Event
        </button>
      </form>
    </div>
  );
}