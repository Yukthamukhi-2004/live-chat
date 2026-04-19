import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="w-full max-w-3xl min-h-fit rounded-3xl border border-zinc-700/50 bg-zinc-900/90 p-10 text-left shadow-2xl shadow-black/40 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Live Chat
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Login</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Your previous screen looked blank because the page only rendered dark
          content with black text. This version makes the first screen visible
          again.
        </p>

        <div className="mt-8 flex items-center gap-4">
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

          <Link
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
            to="/Home"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
