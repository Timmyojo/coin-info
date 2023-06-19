import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";

export default function layout({ children }) {
    return (
        <div
            className="
            h-screen
                flex
                flex-col
                justify-between
            "
        >
            <Header />
            <div
                className="
                flex-grow
                py-24
            "
            >
                {children}
            </div>
            <Sidebar />
        </div>
    )
}
