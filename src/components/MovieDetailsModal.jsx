
import { useEffect, useState } from "react";
const MovieDetailsModal = ({movieId, onClose}) => {
    
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows/'+movieId)
        .then((res2)=>res2.json())
        .then((data2)=>setMovieData(data2))
        .finally(()=>{setIsLoading(false)});
    },[]);
        
    if(isLoading){
        return (
                    <div className="text-amber-50 text-2xl text-center xl:absolute xl:top-2/6 xl:left-1/3 w-2xs">
                        Loading...
                    </div>
                );
    }
    
    return(
        <div className="fixed inset-0 flex justify-center items-center z-999">
            <div className="w-[400px] bg-gray-100 shadow-2xl rounded-2xl">
                <article data-movie="Movie Title One Action 2026" className="overflow-hidden rounded-[18px] border border-white/10 bg-[#101521] transition hover:-translate-y-1 hover:border-white/20 relative">
                    <button type="button" 
                        className="absolute right-3 top-3  pr-4  rounded-full text-white hover:text-amber-800 drop-shadow-black z-9999"
                        onClick={onClose}>✕</button>
                    <div className="absolute left-3 top-3 rounded-full g-black/75 px-2.5 py-1 text-base font-bold backdrop-blur-sm z-9999">
                                        ⭐  <span>•Rating Score•</span> {movieData.rating.average} 
                    </div>
                    <div className="grid aspect-[2/3] place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(255,183,3,.25),transparent_22%),linear-gradient(145deg,#202a40,#17101f)] text-5xl">
                            <img src={movieData.image.original} alt="" />
                    </div>
                    <div className="p-3">
                            <h2 className="text-xl font-semibold">{movieData.name}</h2>
                            <span className="text-base text-slate-500">📅 <span>•Release Date•</span> {movieData.premiered}</span>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl">Overview</h2>
                        Duration: {movieData.averageRuntime} minutes
                        <p className="text-sm font-light">
                            {movieData.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p>
                    </div>
                </article>
                
            </div>
        </div>
    );
}
export default MovieDetailsModal;