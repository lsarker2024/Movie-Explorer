const MovieListingPage = () => {
    return(
        <main class="min-h-[calc(100vh-162px)] py-14 sm:py-20 lg:py-[90px]">
            <div class="mx-auto max-w-[1180px] px-4 sm:px-5 lg:px-0">
            <div class="mt-7 mx-auto max-w-2xl">
                <div class="relative">
                <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-4-4"></path>
                    </svg>
                </span>
                <input id="movieSearch" type="search"
                    placeholder="Search for a movie..."
                    autocomplete="off"
                    class="h-12 w-full rounded-xl border border-white/10 bg-[#101521] pl-12 pr-12 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"/>
                <button id="clearSearch" type="button" aria-label="Clear search"
                    class="absolute inset-y-0 right-0 hidden items-center pr-4 text-slate-500 transition hover:text-white">✕</button>
                </div>
                <p id="searchStatus" class="mt-2 hidden text-xs text-slate-500"></p>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-5 min-[390px]:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">

                <article data-movie="Movie Title One Action 2026" class="overflow-hidden rounded-[18px] border border-white/10 bg-[#101521] transition hover:-translate-y-1 hover:border-white/20 relative">
                    <div class="absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                        ⭐  4.8
                    </div>
                    <div class="grid aspect-[2/3] place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(255,183,3,.25),transparent_22%),linear-gradient(145deg,#202a40,#17101f)] text-5xl">
                        <img src="https://placehold.co/600x900/172033/f8fafc?text=INCEPTION" alt="" />
                    </div>
                    <div class="p-4">
                        <h2 class="text-base font-bold">Movie Title One</h2>
                        <span class="text-xs text-slate-500">Action • 2026</span>
                    </div>
                    <div class="p-4">
                        <a
                        href="/"
                        class="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
                        >
                        See Details
                        </a>
                    </div>
                </article>

                <article data-movie="Movie Title One Action 2026" class="overflow-hidden rounded-[18px] border border-white/10 bg-[#101521] transition hover:-translate-y-1 hover:border-white/20 relative">
                    <div class="absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                        ⭐  4.8
                    </div>
                    <div class="grid aspect-[2/3] place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(255,183,3,.25),transparent_22%),linear-gradient(145deg,#202a40,#17101f)] text-5xl">
                        <img src="https://placehold.co/600x900/172033/f8fafc?text=INCEPTION" alt="" />
                    </div>
                    <div class="p-4">
                        <h2 class="text-base font-bold">Movie Title One</h2>
                        <span class="text-xs text-slate-500">Action • 2026</span>
                    </div>
                    <div class="p-4">
                        <a
                        href="/"
                        class="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
                        >
                        See Details
                        </a>
                    </div>
                </article>
                
                <article data-movie="Movie Title One Action 2026" class="overflow-hidden rounded-[18px] border border-white/10 bg-[#101521] transition hover:-translate-y-1 hover:border-white/20 relative">
                    <div class="absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                        ⭐  4.8
                    </div>
                    <div class="grid aspect-[2/3] place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(255,183,3,.25),transparent_22%),linear-gradient(145deg,#202a40,#17101f)] text-5xl">
                        <img src="https://placehold.co/600x900/172033/f8fafc?text=INCEPTION" alt="" />
                    </div>
                    <div class="p-4">
                        <h2 class="text-base font-bold">Movie Title One</h2>
                        <span class="text-xs text-slate-500">Action • 2026</span>
                    </div>
                    <div class="p-4">
                        <a
                        href="/"
                        class="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
                        >
                        See Details
                        </a>
                    </div>
                </article>

                <article data-movie="Movie Title One Action 2026" class="overflow-hidden rounded-[18px] border border-white/10 bg-[#101521] transition hover:-translate-y-1 hover:border-white/20 relative">
                    <div class="absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                        ⭐  4.8
                    </div>
                    <div class="grid aspect-[2/3] place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(255,183,3,.25),transparent_22%),linear-gradient(145deg,#202a40,#17101f)] text-5xl">
                        <img src="https://placehold.co/600x900/172033/f8fafc?text=INCEPTION" alt="" />
                    </div>
                    <div class="p-4">
                        <h2 class="text-base font-bold">Movie Title One</h2>
                        <span class="text-xs text-slate-500">Action • 2026</span>
                    </div>
                    <div class="p-4">
                        <a
                        href="/"
                        class="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
                        >
                        See Details
                        </a>
                    </div>
                </article>

            </div>

            <div id="noResults" class="hidden py-16 text-center">
                <div class="text-4xl">🔎</div>
                <h2 class="mt-4 text-xl font-bold">No movies found</h2>
                <p class="mt-2 text-sm text-slate-500">Try a different title, genre, or year.</p>
            </div>
            </div>
        </main>

    );
}

export default MovieListingPage;