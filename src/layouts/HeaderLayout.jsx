import { NavLink } from "react-router";

const HeaderLayout =()=>{
    return(
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/90 backdrop-blur-xl">
            <nav className="mx-auto flex min-h-[76px] max-w-[1180px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 lg:px-0">

            <a href="/" className="flex shrink-0 items-center gap-2.5 text-base font-extrabold tracking-tight sm:text-xl">
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-amber-400 to-orange-500 text-lg shadow-lg shadow-amber-500/10">
                🎬
                </span>
                <span>JossMovies</span>
            </a>

            <div className="order-3 flex w-full items-center justify-center gap-6 border-t border-white/10 pt-3 sm:order-none sm:w-auto sm:border-0 sm:pt-0 sm:gap-8">
                <NavLink 
                    to="/" 
                    end 
                    className=
                    {({ isActive }) => 
                        isActive ? "relative py-1 text-lg font-medium text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-amber-400" : "py-1 text-lg font-medium text-slate-400 transition hover:text-white"
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/movie-listing" 
                    className=
                    {({ isActive }) => 
                        isActive ? "relative py-1 text-lg font-medium text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-amber-400" : "py-1 text-lg font-medium text-slate-400 transition hover:text-white"
                    }>
                    Movies
                </NavLink>
            </div>

            <a href="/movie-listing"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] bg-amber-400 px-4 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/10 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:px-5 sm:text-sm">
                Explore Movies <span>→</span>
            </a>
            </nav>
        </header>
    );
}

export default HeaderLayout;