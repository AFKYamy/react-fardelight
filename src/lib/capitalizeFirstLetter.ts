export function capitalizeFirstLetter(text: string) {
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);

    const capitalizedText = firstLetterCap + remainingLetters;
    
    return capitalizedText;
}

export function cleanString(text: string) {
    return text.replace(/[-\W]/g, ' ');
}

export function normalizeText(text: string) {
    return cleanString(capitalizeFirstLetter(text));
}