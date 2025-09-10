import useHelmet from '@hooks/useHelmet';
import React, { useEffect } from 'react';


const Contact: React.FC = () => {

    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle("Contact")
    }, [helmet])

    return (
        <>
            <h1>Contact Page</h1>
        </>
    )
}

export default Contact