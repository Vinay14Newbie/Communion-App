import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover and join events that bring people together from all walks of
          life. Experience the power of connection and community.
        </p>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link
            to="/events"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            Explore Events
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, staggerChildren: 0.15 },
          },
        }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
      >
        {/* Card 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Religious Gatherings
          </h2>
          <p className="text-gray-600 mt-2">
            Join prayer meetings, meditation sessions, and spiritual events.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Charity Events
          </h2>
          <p className="text-gray-600 mt-2">
            Make a difference by participating in charity drives and
            fundraisers.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Social Meetups
          </h2>
          <p className="text-gray-600 mt-2">
            Connect with people over shared interests and hobbies.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
