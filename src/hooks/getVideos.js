import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


const getMovieVideos = (param) => {
    return api(`/movie/${param.queryKey[1]}/videos?language=en-US`)
}


export const useVideos = (movieId) => {
    return useQuery({
        queryKey : ['movie-video',movieId],
        queryFn : getMovieVideos,
        select : (data) => {
            return data.data.results
        }
    })
}