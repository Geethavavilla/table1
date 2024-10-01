import {  Route, Routes } from "react-router-dom";
import { Hw1 } from "./Components/Hw1/Hw1";
import { Hw2 } from "./Components/Hw2/Hw2";

export function AppRouter(){
    return(
        <>
        <Routes>
           <Route path="/hw1" element={<Hw1></Hw1>}></Route>
             <Route path="/hw2" element={<Hw2></Hw2>}></Route> 

        </Routes>
        </>
    )
}