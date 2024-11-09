import { readFromStorage, writeToStorage } from "./storage.js";

let profile = {
    name: '',
    progress: {}
};

export function getName() {
    return profile.name;
}

export function setName(name) {
    profile.name = name;
}

export function containsStory(story) {
    return story in profile.progress;
}

export function getProgressLength() {
    return Object.keys(profile.progress).length;
}

export function getProgress(story) {
    return profile.progress[story] || 0;
}

export function setProgress(story, level) {
    if (!profile.progress[story]) {
        profile.progress[story] = 0;
    }
    profile.progress[story] = level;
    writeProfileToStorage();
}

export function updateProfile() {
    let elem = document.getElementById('form-name');
    if (elem) {
        setName(elem.value);
        writeProfileToStorage().then(() => {setupProfileName();})
    }
}

async function readProfileFromStorage() {
    let val = await readFromStorage('profile');
    if (val) {
        let saved = JSON.parse(val);
        for (let key in saved) {
            profile[key] = saved[key];
        }
    }
}

async function writeProfileToStorage() {
    await writeToStorage('profile', JSON.stringify(profile));
}

function setupProfileName() {
    let elem = document.getElementById('profile-name');
    if (elem) {
        let name = getName();
        if (name === '') {
            elem.textContent = 'Profile';
        } else {
            elem.textContent = name;
        }
    }
}

// Read the profile from storage
readProfileFromStorage();
// Call the function to setup the profile name
setupProfileName();
