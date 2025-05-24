

export const shortNamePath = (link: string, maxLength: number = 20) => {
    return link.length > 27 ? link.slice(0, maxLength) + "..." : link; 
};