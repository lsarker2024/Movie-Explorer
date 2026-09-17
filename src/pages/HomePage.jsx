const HomePage =()=>{
    return(
        <main>

            <section class="relative isolate min-h-[590px] overflow-hidden sm:min-h-[650px]">

                <div class="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_30%,rgba(255,183,3,.20),transparent_27%),radial-gradient(circle_at_90%_80%,rgba(102,49,181,.28),transparent_34%),linear-gradient(115deg,#090c13_0%,#121827_48%,#24182b_100%)]"></div>
                <div class="absolute -right-24 top-20 -z-10 h-[420px] w-[420px] rounded-full border border-white/10 opacity-60 shadow-[0_0_0_55px_rgba(255,255,255,.025),0_0_0_110px_rgba(255,255,255,.018)] sm:right-[4%] sm:h-[480px] sm:w-[480px]"></div>
                <div class="absolute right-[-20px] top-36 -z-10 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-amber-400/15 to-orange-500/0 blur-[1px] sm:right-[12%] sm:top-[24%] sm:h-[300px] sm:w-[300px]"></div>
                <div class="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,11,18,.98)_0%,rgba(8,11,18,.86)_40%,rgba(8,11,18,.25)_100%),linear-gradient(0deg,rgba(8,11,18,.3),transparent_30%)]"></div>

                <div class="mx-auto min-h-[590px] max-w-[680px] text-center px-4 py-20 sm:min-h-[650px] sm:px-5 sm:py-24 lg:px-0">
                    <div class="text-center">
                        <h1 class="mt-3 text-[clamp(2.7rem,7vw,5.7rem)] font-extrabold leading-[.98] tracking-[-.055em]">
                            Discover <span class="text-amber-400">Movies</span>  
                        </h1>

                        <p class="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
                            Explore and discover your favorite movies from around the world.
                            <br />
                            Find new stories, unforgettable characters, and films you'll love.
                        </p>

                        <div class="mt-8 gap-3">
                            <a href="/movie-listing"
                            class="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[10px] bg-amber-400 px-6 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/15 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto">
                            Explore Now <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default HomePage;