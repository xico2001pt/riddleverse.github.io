export function readFromStorage(key) {
    return localStorage.getItem(key);
}

export function writeToStorage(key, value) {
    localStorage.setItem(key, value);
}

// TODO: ENCRYPT AND DECRYPT THE DATA
