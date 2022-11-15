import React from 'react';

interface ErrorProps {
    error:string
}


export const Error = (props:ErrorProps) => {
    const {error} = props
    return (
        <p className="text-center text-red-700">{error}</p>
    );
};

