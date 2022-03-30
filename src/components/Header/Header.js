import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    //Note: 1st way to simply route using anchor tag... But the problem is it reloads when
    //      page loads......

    // Note: To solve that we need to use <Link> Components in React and to instead of href......

    return (
        <div>
            <h1>Welcome To My Fancy Routing Website!!!</h1>
            {/* <nav>
                <a href="/">Home</a>
                <a href="/users">Users</a>
                <a href="/about">About</a>
            </nav> */}

            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="users">Users</Link>
                <Link to="about">About</Link>
            </nav> */}


            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="users">Users</CustomLink>
                <CustomLink to="about">About</CustomLink>
            </nav>

        </div>
    );
};

export default Header;