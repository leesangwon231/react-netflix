import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


const getGenreMovieVideos = (param) => {
    if (!param.queryKey[1]) {
        throw new Error('No movie ID provided');
    }
    return api(`keyword/${param.queryKey[1]}/movies`)
}


export const useGenreMoviesVideos = (genreId) => {
    return useQuery({
        queryKey : ['movie-genre-video',genreId],
        queryFn : getGenreMovieVideos,
        select : (data) => {
            return data.data.results
        }
    })
}