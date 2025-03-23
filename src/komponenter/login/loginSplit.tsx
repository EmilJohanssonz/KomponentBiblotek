import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LoginPageSplit() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-4xl flex rounded-lg shadow-lg overflow-hidden">
        {/* Left or Right Background Section */}
        <motion.div
          initial={{ opacity: 0, x: isRegister ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-1/2 hidden lg:block ${
            isRegister ? "order-1 bg-blue-200" : "order-2 bg-green-200"
          }`}
        >
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: isRegister ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full lg:w-1/2 bg-white p-8 ${
            isRegister ? "order-2" : "order-1"
          }`}
        >
          <h2 className="text-gray-800 text-2xl font-semibold text-center mb-6">
            {isRegister ? "Register" : "Login"}
          </h2>
          <form>
            <div className="mb-4">
              <label className="text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your password"
              />
            </div>
            {isRegister && (
              <div className="mb-4">
                <label className="text-gray-700 block mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
            >
              {isRegister ? "Sign Up" : "Log In"}
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
          <p className="text-gray-700 text-center mt-4 text-sm">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-blue-500 hover:underline ml-1"
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
