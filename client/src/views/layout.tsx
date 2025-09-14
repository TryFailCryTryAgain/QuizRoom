import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <main className="layout_001">
                <aside className="layout_asidebar_001">
                    <br />
                    <br />
                    {/* Leaving room for a logo here */}
                    <br />
                    <br />
                    <ul>
                        <Link className="navlinks" to="/">Home</Link>
                        <Link className="navlinks" to="play">Play</Link>
                        <Link className="navlinks" to="stats">Stats</Link>
                    </ul>
                    <div className="settings">
                        <Link to="settings" className="gear"><i className="fa-solid fa-gear"></i></Link>
                    </div>
                </aside>
                <div className="outlet_window">
                    <Outlet />
                </div>
            </main>
        </>
    );
};