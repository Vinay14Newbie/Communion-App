export const AddEventForm = ({ handleAddEvent, setShowForm, showForm }) => {
  return (
    <div>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setShowForm(false)}
      ></div>

      {/* Form */}
      <form
        onSubmit={handleAddEvent}
        className="fixed top-1/2 left-1/2 w-full max-w-lg bg-white shadow-xl rounded-xl p-6 space-y-4 z-50 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />

        {/* Description */}
        <input
          type="text"
          name="description"
          placeholder="Event Description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />

        {/* Time Fields */}
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-gray-600 mb-1">From</span>
            <input
              type="time"
              name="time1"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 mb-1">To</span>
            <input
              type="time"
              name="time2"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <select
          name="category"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>

        {/* Submit Button */}
        <div className="flex gap-x-3">
          <button
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            + Add Event
          </button>
        </div>
      </form>
    </div>
  );
};
