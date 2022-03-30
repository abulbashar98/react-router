import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    textDecoration: match ? "underline" : "none",
                    color: match ? 'red' : 'black',
                    fontSize: match ? '1.5em' : ''
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && "(!Reload)"}

        </div>
    );
}

export default CustomLink;