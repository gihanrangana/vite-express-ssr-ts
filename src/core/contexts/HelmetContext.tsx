import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const helmetContext = React.createContext<any>({});

const HelmetProvider = (props: React.PropsWithChildren) => {
    const [title, setTitle] = useState('Hello');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [meta, setMeta] = useState<any[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [link, setLink] = useState<any[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [script, setScript] = useState<any[]>([]);
    const [style, setStyle] = useState<string | []>('');

    return (
        <helmetContext.Provider
            value={{ title, setTitle, meta, setMeta, link, setLink, script, setScript, style, setStyle }}>
            <Helmet>
                {title && <title>{title}</title>}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {meta && meta.map((m: any, i: number) => <meta key={i} {...m} />)}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {link && link.map((l: any, i: number) => <link key={i} {...l} />)}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {script && script.map((s: any, i: number) => <script key={i} {...s} />)}
                {style && typeof style === 'string' && <style>{style}</style>}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {style && Array.isArray(style) && style.map((s: any, i: number) => <style key={i}>{s}</style>)}
            </Helmet>

            {props.children}
        </helmetContext.Provider>
    );
};

export { helmetContext };
export default HelmetProvider;
