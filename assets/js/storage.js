const IV = new TextEncoder().encode("francisco");

let storageKey = "cerqueira";

export function readFromStorage(key) {
    let content = localStorage.getItem(key);
    if (content) {
        content = decodeString(content, storageKey);
    }
    return content;
}

export function writeToStorage(key, value) {
    value = encodeString(value, storageKey);
    localStorage.setItem(key, value);
}

function encodeString(input) {
    const encoder = new TextEncoder();
    return btoa(String.fromCharCode(...encoder.encode(input)));
  }
  
function decodeString(encoded) {
const decoder = new TextDecoder();
const decodedData = atob(encoded).split('').map(char => char.charCodeAt(0));
return decoder.decode(new Uint8Array(decodedData));
}
