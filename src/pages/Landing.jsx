import { Link } from "react-router-dom";
import music from "../assets/music.jpg";
import tech from "../assets/tech.jpg";
import birth from "../assets/birth.jpg";
import engage from "../assets/engage.jpg";
import bridal from "../assets/bridal.jpg";
import family from "../assets/family.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, title: "Music Fest", date: "April 10", image: music },
  { id: 2, title: "Tech Conference", date: "May 5",image: tech },
  { id: 3, title: "Birthday Party", date: "June 6", image: birth },
  { id: 4, title: "Engagement Function", date: "July 11",  image: engage},
  { id: 5, title: "Bridal Shower", date: "August 16",  image: bridal},
   { id: 6, title: "Family Reunion", date: "September 20",  image: family}
];

function Landing() {
  const navigate = useNavigate();
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      
      
      <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
          EventApp
        </h1>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600 shadow-md hover:shadow-lg transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white border border-indigo-500 text-indigo-600 hover:bg-indigo-50 shadow-sm transition duration-300"
          >
            Register
          </Link>
        </div>
      </nav>

      
      <div className="text-center mt-10 px-6">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Upcoming Events
        </h1>
        <p className="text-gray-500 mt-2">
          Discover what's happening around you
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
  {events.map((event) => (
    <div
      key={event.id}
      className="group rounded-2xl overflow-hidden bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Title on Image */}
        <h2 className="absolute bottom-3 left-4 text-white text-lg font-semibold">
          {event.title}
        </h2>
      </div>

      
      <div className="p-5">
        <p className="text-gray-500">{event.date}</p>
               <button  onClick={() => navigate("/register")}className="mt-5 w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium hover:from-indigo-700 hover:to-blue-600 transition duration-300 shadow-md hover:shadow-lg">
                Book Now
              </button>
        
        <div className="mt-4 h-1 w-12 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
      </div>
    </div>
  ))}
</div>

{/* Footer */}
 <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side */}
        <h2 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
          Contact Us
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

            <a
           href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
           >
           <FaYoutube />
         </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Right Side */}
        <p className="text-gray-500 text-sm">
          © 2026 EventApp. All rights reserved.
        </p>

      </div>
    </footer>
    </div>
  );
}

export default Landing;