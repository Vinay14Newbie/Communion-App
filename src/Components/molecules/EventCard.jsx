import { CalendarDays, Clock, Trash } from "lucide-react";

export const EventCard = ({ event, onDelete }) => {
  console.log(event);
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
      {/* Event Details */}
      <div className="p-4">
        <div className="">
          {/* Title */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold mt-2">{event.title}</h3>
            <button
              onClick={onDelete}
              className="text-red-500 flex items-center"
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>

          {event.description && (
            <p className="text-base mt-1">{event.description}</p>
          )}

          <p className="text-base font-bold mt-1">{event.category}</p>

          {/* Date and Time */}
          <div className="flex items-center text-gray-600 text-sm mt-2">
            <CalendarDays className="w-4 h-4 mr-1" />
            <p>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Clock className="w-4 h-4 mr-1" />
            <p>{event.time}</p>
          </div>
        </div>

        <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md flex justify-center items-center hover:bg-gray-700 transition">
          Event Details →
        </button>
      </div>
    </div>
  );
};
