import './App.css';
import {usePopularMovies} from "./hooks/getPopularMovies";
import {Route, Routes} from "react-router";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFound from "./pages/NotFound/NotFound";

function App() {

    console.log(usePopularMovies().data);
    //홈페이지
    // 영화디테일 /movies
    // 영화 디테일 화면 /movies/:id

    // <img className={"img"} src={"https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/0e19e43e-655e-4150-b74a-e0028dd78b6a/KR-ko-20240820-TRIFECTA-perspective_WEB_ac15e26c-11f9-4a9a-b934-5b7089743290_large.jpg"}></img>
    //         <div className={"background"}></div>

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/movies">
                        <Route index element={<MoviePage/>}/>
                        <Route path={":id"} element={<MovieDetail/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
