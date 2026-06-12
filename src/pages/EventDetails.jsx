import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  CalendarDays,
  MapPin,
  FileText,
  Hash,
} from "lucide-react";

export default function EventDetails() {
  const location = useLocation();
  const event = location.state;
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h2 className="text-2xl font-semibold text-gray-600">
          Event not found
        </h2>
      </div>
    );
  }

  const handleRegister = async () => {
  try {
    const res = await axios.post(
      "https://event-38as.onrender.com/api/auth/event",
      event
    );

    console.log(res.data);

    alert("Event Registered Successfully");

    navigate("/my-events", {
      state: event,
    });
  } catch (err) {
    console.log(err);
    alert("Registration Failed");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/80 shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">
            {event.id}
          </h1>
          <p className="text-indigo-100">
            Event Details
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">

         <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl">
            <Hash className="text-amber-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Event Title
              </h3>
              <p className="text-gray-600">
                {event.title}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl">
            <FileText className="text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Description
              </h3>
              <p className="text-gray-600">
                {event.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
            <CalendarDays className="text-purple-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Event Date
              </h3>
              <p className="text-gray-600">
                 {new Date(event.date).toLocaleDateString("en-GB", {
                 day: "numeric",
                   month: "long",
                 year: "numeric",
                    })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-2xl">
            <MapPin className="text-pink-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Location
              </h3>
              <p className="text-gray-600">
                {event.location}
              </p>
            </div>
          </div>

  

          {/* Action Button */}
            <button      onClick={handleRegister} className="w-full mt-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition duration-300">
              Register Now
            </button>
        </div>
      </div>
    </div>
  );
}