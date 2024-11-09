const IV = new TextEncoder().encode("francisco");

let storageKey = "cerqueira";

export function readFromStorage(key) {
    let content = localStorage.getItem(key);
    if (content) {
        content = decrypt(content, storageKey);
    }
    return content;
}

export function writeToStorage(key, value) {
    value = encrypt(value, storageKey);
    localStorage.setItem(key, value);
}

async function encrypt(text, derivedKey) {
    const encodedText = new TextEncoder().encode(text);

    const encryptedData = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: IV },
        derivedKey,
        encodedText
    );

    const uintArray = new Uint8Array(encryptedData);

    const string = String.fromCharCode.apply(null, uintArray);

    const base64Data = btoa(string);

    return base64Data;
};

async function decrypt(text, derivedKey) {
    const initializationVector = new Uint8Array(IV).buffer;

    const string = atob(text);
    const uintArray = new Uint8Array(
    [...string].map((char) => char.charCodeAt(0))
    );
    const algorithm = {
    name: "AES-GCM",
    iv: initializationVector,
    };
    const decryptedData = await window.crypto.subtle.decrypt(
    algorithm,
    derivedKey,
    uintArray
    );

    return new TextDecoder().decode(decryptedData);
};
