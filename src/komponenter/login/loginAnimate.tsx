import { FaGoogle, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LoginPageAnimate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-move">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-8 rounded-lg shadow-lg w-full max-w-sm backdrop-blur-md bg-white/10"
      >
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 text-white placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 text-white placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 flex gap-4 justify-center">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition">
            <FaFacebook /> Facebook
          </button>
        </div>
        <p className="text-white text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-300 hover:underline">
            Register
          </a>
        </p>
      </motion.div>
    </div>
  );
}
