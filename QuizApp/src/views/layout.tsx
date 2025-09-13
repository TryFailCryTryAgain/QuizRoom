import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <main className="layout_001">
                <aside className="layout_asidebar_001">
                    <ul>
                        <Link to="">Home</Link>
                        <Link to="play">Play</Link>
                        <Link to="stats">Stats</Link>
                    </ul>
                    <div className="settings">
                        <Link to="settings">Settings</Link>
                    </div>
                </aside>
                <div className="outlet_window">
                    <Outlet />
                </div>
            </main>
        </>
    );
};