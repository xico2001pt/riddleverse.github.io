export function readFromStorage(key) {
    let content = localStorage.getItem(key);
    if (content) {
        content = decodeString(content);
    }
    return content;
}

export function writeToStorage(key, value) {
    value = encodeString(value);
    localStorage.setItem(key, value);
}

export function encodeString(input) {
    const encoder = new TextEncoder();
    return btoa(String.fromCharCode(...encoder.encode(input)));
}

export function decodeString(encoded) {
    const decoder = new TextDecoder();
    const decodedData = atob(encoded).split('').map(char => char.charCodeAt(0));
    return decoder.decode(new Uint8Array(decodedData));
}

export function downloadFile(name, content) {
    const blob = new Blob([content], { type: 'text/plain' });
            
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = name;

    link.click();

    URL.revokeObjectURL(link.href);
}

export function downloadFile(name, content) {
    const blob = new Blob([content], { type: 'text/plain' });
            
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = name;

    link.click();

    URL.revokeObjectURL(link.href);
}