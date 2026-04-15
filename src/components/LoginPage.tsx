import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/85 p-10 text-left shadow-2xl shadow-black/30 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
          Live Chat
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Login</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Your previous screen looked blank because the page only rendered dark
          content with black text. This version makes the first screen visible
          again.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link
            to="/chat"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Enter chat
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            UI visible again
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
