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
          <div>
            <el-dropdown className="inline-block">
              <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                Options
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                >
                  <path
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>

              <el-menu
                anchor="bottom end"
                popover
                className="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Duplicate
                  </a>
                </div>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Archive
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Move
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Share
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Add to favorites
                  </a>
                </div>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Delete
                  </a>
                </div>
              </el-menu>
            </el-dropdown>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
