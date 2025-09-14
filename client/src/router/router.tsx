import { RouterContainer } from "./routerContainer";
import { Routes, Route } from "react-router-dom";
import Homepage from "../views/homepage";
import {Layout } from "../views/layout";
import { PlayerStats } from "../components/playerStats";
import { GameLoop } from "../components/gameLoop";
import { Login } from "../views/login";
import { Register } from "../views/register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={RouterContainer.Homepage} element={<Homepage />}></Route>
            <Route path={RouterContainer.LayoutPage} element={<Layout />}>
                <Route path="stats" element={<PlayerStats />}></Route>
                <Route path="play" element={<GameLoop />}></Route>
                <Route path="/" element={<Homepage />}></Route>
            </Route>
            <Route path={RouterContainer.LoginPage} element={<Login />}></Route>
            <Route path={RouterContainer.RegisterPage} element={<Register />}></Route>

        </Routes>
    );
};

export default AppRoutes;