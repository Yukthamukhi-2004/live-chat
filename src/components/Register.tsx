import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-3xl border border-zinc-700/50 bg-zinc-900/90 p-10 text-left shadow-2xl shadow-black/40 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Live Chat
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Register</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Create your account to start chatting.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* Username */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Username
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            {/* Submit Button */}
            <button className="mt-2 w-full rounded-full bg-yellow-400 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300">
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-center text-xs text-zinc-500">
              Already have an account?{" "}
              <Link
                to="/loginPage"
                className="text-yellow-400 hover:text-yellow-300 transition"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
