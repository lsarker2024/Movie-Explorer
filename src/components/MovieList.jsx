import { useEffect, useState } from "react";

const MovieList = () =>{
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>res.json())
        .then((data)=>setMovieData(data))
        .finally(()=>{setIsLoading(false)});
    },[]);

    if(isLoading){
        return <p className="text-amber-50 text-2xl text-center">Loading...</p>
    }

    return(
            
        movieData.map((movie)=>(
            <article data-movie="Movie Title One Action 2026" className="overflow-hidden rounded-[18px] border border-white/10 bg-[#101521] transition hover:-translate-y-1 hover:border-white/20 relative">
                <div className="absolute left-3 top-3 rounded-full g-black/75 px-2.5 py-1 text-base font-bold backdrop-blur-sm">
                                ⭐  Rating: {movie.rating.average}
                </div>
                <div className="grid aspect-[2/3] place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(255,183,3,.25),transparent_22%),linear-gradient(145deg,#202a40,#17101f)] text-5xl">
                    <img src={movie.image.medium} alt="" />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{movie.name}</h2>
                    <span className="text-base text-slate-500">📅 Release: {movie.premiered}</span>
                </div>
                <div className="p-4">
                    <a
                    href="/"
                    className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
                    >
                    See Details
                    </a>
                </div>
            </article>
        ))
    );
}

export default MovieList;