import { useLocation } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function MyEvents() {
  const location = useLocation();
  const event = location.state;

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-600">
            No registered events found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Events
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Your registered event details
          </p>
        </div>

        {/* Event Card */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">
                {event.title}
              </h2>

              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">
                <CheckCircle size={16} />
                Registered
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8 space-y-5">

            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl">
              <CalendarDays className="text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Event Date
                </h3>

                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
              <MapPin className="text-purple-600" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Location
                </h3>

                <p className="text-gray-600">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-2xl">
              <FileText className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Description
                </h3>

                <p className="text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}