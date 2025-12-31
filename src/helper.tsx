const CDN = import.meta.env.VITE_CDN

export const siteImage=(filename: string)=>{
    return `${CDN}/site/${filename}`;
}