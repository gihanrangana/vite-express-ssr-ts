import useHelmet from '@hooks/useHelmet';
import React, { useEffect } from 'react';


const Contact: React.FC<ContactProps> = (props) => {

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

interface ContactProps {
    [key: string]: any
}

export default Contact