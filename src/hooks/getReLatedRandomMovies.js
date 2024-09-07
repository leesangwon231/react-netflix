import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


const getLatedMovies = (param) => {
    let index = Math.floor(Math.random() * param.queryKey[1].genres.length)
    let movieId = param.queryKey[1].genres[index].id;
    //let page =  Math.floor(Math.random() * 10)
    return api.get(`/movie/${movieId}/recommendations?language=en-US&page=1`)
}

export  const useReLatedMovies =(genres) => {
    return useQuery({
        queryKey : ['related-movies',{genres}],
        queryFn : getLatedMovies,
        select : (data) => {
            return data.data.results;
        }
    })
}