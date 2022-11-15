import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-600 items-center text-white">
            <span className="font-bold">Shopping cards</span>
            <span>
                        <NavLink className="mr-6" to="/">Products</NavLink>
                        <NavLink to="/about">About</NavLink>
            </span>
        </nav>
    );
};

