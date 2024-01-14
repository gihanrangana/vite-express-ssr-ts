import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const helmetContext = React.createContext({})

const HelmetProvider = (props: any) => {

    const [title, setTitle] = useState("Hello")
    const [meta, setMeta] = useState([])
    const [link, setLink] = useState([])
    const [script, setScript] = useState([])
    const [style, setStyle] = useState<string | []>("")

    return (
        <helmetContext.Provider value={{ title, setTitle, meta, setMeta, link, setLink, script, setScript, style, setStyle }}>
            <Helmet>
                {title && <title>{title}</title>}
                {meta && meta.map((m: any) => <meta {...m} />)}
                {link && link.map((l: any) => <link {...l} />)}
                {script && script.map((s: any) => <script {...s} />)}
                {style && (typeof style === 'string') && <style>{style}</style>}
                {style && Array.isArray(style) && style.map((s: any) => <style>{s}</style>)}
            </Helmet>

            {props.children}
        </helmetContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { helmetContext }
export default HelmetProvider;
