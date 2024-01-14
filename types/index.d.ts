declare module '*.svg' {
    const content: any;
    export default content;
}

type helmetContextType = {
    title: string;
    setTitle: (title: string) => void;
    meta: any;
    setMeta: (meta: any) => void;
    link: any;
    setLink: (link: any) => void;
    script: any;
    setScript: (script: any) => void;
    style: string | [];
    setStyle: (style: string | []) => void;
}