import { useEffect, useState } from "react";
import { EventCard } from "../Components/molecules/EventCard";
import { AddEventForm } from "../Components/molecules/AddEventForm";

const DEFAULT_EVENTS = [
  {
    title: "Morning Meditation",
    description: "Start your day with mindfulness and peace.",
    date: new Date().toISOString().split("T")[0],
    category: "Religious",
    time: "07:00 AM - 08:00 AM",
  },
  {
    title: "Charity Fundraiser",
    description: "Join us to raise funds for local schools.",
    date: new Date().toISOString().split("T")[0],
    category: "Charity",
    time: "10:00 AM - 12:00 PM",
  },
  {
    title: "Weekend Social Meetup",
    description: "Connect with like-minded people over coffee.",
    date: new Date().toISOString().split("T")[0],
    category: "Social",
    time: "04:00 PM - 06:00 PM",
  },
];

export const Event = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    if (savedEvents.length === 0) {
      setEvents(DEFAULT_EVENTS);
      localStorage.setItem("events", JSON.stringify(DEFAULT_EVENTS));
    } else {
      setEvents(savedEvents);
    }
  }, []);

  // Save events to localStorage whenever the events state changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const category = e.target.category.value;
    const time1 = e.target.time1.value;
    const time2 = e.target.time2.value;
    let time = `All day`;
    if (time1 && time2) {
      time = `${time1} - ${time2}`;
    }

    const newEvent = { title, description, date, category, time };

    // Add new event and save to state
    setEvents((prev) => [...prev, newEvent]);
    e.target.reset();
    setShowForm(false);
  };

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((event, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div className="p-4 px-6 lg:px-[140px] min-h-screen">
      <div className="flex items-center  gap-x-7 mb-6">
        <h2 className="text-2xl font-bold">Event Listing</h2>

        {/* Filter */}
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>

        {/* Add event button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition ${
            showForm ? "bg-red-500 hover:bg-red-600" : ""
          }`}
        >
          {showForm ? "Cancel" : "+ Add Event"}
        </button>
      </div>

      {/* Event Form */}
      {showForm && (
        <AddEventForm
          handleAddEvent={handleAddEvent}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      )}

      {/* Event List */}
      {filteredEvents.length === 0 && !showForm ? (
        <div className="flex flex-col items-center mt-10">
          <img
            src="https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-2566.jpg?t=st=1742203723~exp=1742207323~hmac=faa9149699306da8f0670084443c1db9cfa6ab3aca9c08897b7d304fb8012146&w=826" // Add your no-events image here
            alt="No Events"
            className="w-72 h-72 object-contain"
          />
          <p className="text-gray-500 mt-4 mb-8">
            No events found. Add one now!
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition ${
              showForm ? "bg-red-500 hover:bg-red-600" : ""
            }`}
          >
            + Add Event
          </button>
        </div>
      ) : (
        <ul>
          <li className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                onDelete={() => handleDeleteEvent(index)}
              />
            ))}
          </li>
        </ul>
      )}
    </div>
  );
};
