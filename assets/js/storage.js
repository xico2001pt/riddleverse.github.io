const IV = new TextEncoder().encode("francisco");

let storageKey = "cerqueira";

export async function readFromStorage(key) {
    let content = localStorage.getItem(key);
    if (content) {
        content = await decrypt(content, storageKey);
    }
    return content;
}

export async function writeToStorage(key, value) {
    value = await encrypt(value, storageKey);
    localStorage.setItem(key, value);
}

async function encrypt(text, derivedKey) {
    const encodedText = new TextEncoder().encode(text);
    derivedKey = await window.crypto.subtle.importKey(
        'raw', 
        encoder.encode(derivedKey), 
        { name: 'AES-GCM' },
        false, 
        ['encrypt']
    );

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
    derivedKey = await window.crypto.subtle.importKey(
        'raw', 
        encoder.encode(derivedKey), 
        { name: 'AES-GCM' },
        false, 
        ['decrypt']
    );

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
