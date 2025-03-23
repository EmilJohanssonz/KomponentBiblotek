import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginPageMinmal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-gray-800 text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
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
        <p className="text-gray-600 text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
