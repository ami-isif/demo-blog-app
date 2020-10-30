import React from 'react';

function Container( {children} ) {
    return (
        <div className="container blog-container">
           { children }
        </div>
    )
}

export default Container;