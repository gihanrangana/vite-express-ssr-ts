import React from 'react';

const NotFound: React.FC<NotFoundProps> = (props) => {

    return (
        <>
            <h1>404 - Not Found</h1>
        </>
    )
}

interface NotFoundProps {
    [key: string]: any
}

export default NotFound;