import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl rounded-3xl border border-zinc-700/50 bg-zinc-800/90 p-10">
        <header className="flex flex-row gap-80">
          <h1 className="mt-4 text-4xl font-semibold text-white">Welcome</h1>
          <div className="flex flex-row gap-2">
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
              to="/LoginPage"
            >
              Login
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
              to="/Register"
            >
              Register
            </Link>
          </div>
        </header>
        <main className="w-full max-w-3xl min-h-fit rounded-3xl border border-zinc-700/50 bg-zinc-900/90 p-10 text-left shadow-2xl shadow-black/40 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Live Chat
          </p>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Your previous screen looked blank because the page only rendered
            dark content with black text. This version makes the first screen
            visible again.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/chat"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
            >
              Enter chat
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
