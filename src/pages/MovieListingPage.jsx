import { useState } from "react";
import MovieList from "../components/MovieList";
import MovieListBySearch from "../components/MovieListBySearch";

const MovieListingPage = () => {
    const[searchQuery,setSearchQuery] =  useState('');
    const[submitQuery, setSubmitQuery] = useState('');
    const handleSubmit = (event) =>{
        if(event.key==='Enter'){
            event.preventDefault();
            setSubmitQuery(searchQuery);
            //console.log(searchQuery);
        }
    }
    
        return(
            <main className="min-h-[calc(100vh-162px)] py-14 sm:py-20 lg:py-[90px]">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-5 lg:px-0">
                    <div className="mt-7 mx-auto max-w-2xl">
                        <div className="relative">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7"></circle>
                                <path d="m20 20-4-4"></path>
                                </svg>
                            </span>
                            <input 
                                type="search"
                                value={searchQuery}
                                onChange={(e)=>setSearchQuery(e.target.value)}
                                onKeyDown={handleSubmit}
                                placeholder="Search for a movie...and Press Enter"
                                autoComplete="off"
                                className="h-12 w-full rounded-xl border border-white/10 bg-[#101521] pl-12 pr-12 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"/>
                            <button type="button" aria-label="Clear search"
                                className="absolute inset-y-0 right-0 hidden items-center pr-4 text-slate-500 transition hover:text-white">✕</button>
                        </div>
                        <p id="searchStatus" className="mt-2 hidden text-xs text-slate-500"></p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-5 min-[390px]:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                        {(submitQuery=='')?<MovieList />:<MovieListBySearch searchQuery={submitQuery}/>}
                    </div>
                </div>
            </main>
        );
}

export default MovieListingPage;