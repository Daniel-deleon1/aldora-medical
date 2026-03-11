import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Aldora Medical</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2026 Aldora Medical</p>
            </footer>
        </div>
    );
};

export default Layout;