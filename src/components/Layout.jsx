// src/components/Layout.jsx
import Sidebar from './Sidebar';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div className="flex md:flex-row flex-col w-full h-full">
            <Sidebar />
            <div className="box-border w-full h-screen overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default Layout;