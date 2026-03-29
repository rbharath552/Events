import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Music Fest", date: "April 10" },
  { id: 2, title: "Tech Conference", date: "May 5" },
   { id: 3, title: "Birthday Party", date: "June 6" },
   { id: 4, title: "Engagement Function", date: "July 11" }
];

function Landing() {
  return (
    <div className=" p-6">
      <h1 className=" bg-amber-200 text-3xl font-bold text-center mb-6">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.date}</p>
          </div>
        ))}
      </div>

      <div className=" flex gap-250 text-center mt-6 ">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        
        <Link to="/register" className="bg-green-400 text-white px-4 py-2 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}
export default Landing;