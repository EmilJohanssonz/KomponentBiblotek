export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-sm">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Log In
          </button>
        </form>
        <p className="text-gray-300 text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
