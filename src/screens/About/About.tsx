import useHelmet from '@hooks/useHelmet';
import React, { useEffect } from 'react';

const About: React.FC = () => {

    const helmet = useHelmet()
    
    useEffect(() => {
        helmet.setTitle("About")
    },[helmet])

    return (
        <>
            <h1>About Us</h1>
        </>
    )
}

export default About;