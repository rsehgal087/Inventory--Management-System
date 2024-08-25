import React from "react";
export default function NavBar({currentRoute}) { // Define and export the NavBar component, receiving currentRoute as a prop
    const showLoginButton = currentRoute === '/'; //show login button in homepage
    const showLogoutButton = ['/dashboard', '/add', '/update'].includes(currentRoute); //show logout button in defined pages like dashboar,add,update
    return (
        // HTML code for Navbar which has home, add product, dashboard, login and logout button
        <div>
            <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 h1" href="/">Inventory Management</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            {currentRoute !== '/login' && currentRoute !== '/' && (
                            <a class="nav-link" href="/add">Add Product</a>)}
                            {currentRoute !== '/login' && currentRoute !== '/' && (
                            <a class="nav-link" href="/dashboard">Dashboard</a>)}
                        
                        </div>    
                        {showLoginButton && (
                            <a type="button" className="btn btn-light ms-auto" href="/login">Admin Login</a>
                        )}
                        {showLogoutButton && (
                            <a type="button" className="btn btn-light ms-auto" href="/login">Logout</a>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}