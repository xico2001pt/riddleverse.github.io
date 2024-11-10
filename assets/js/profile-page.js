import { getName, getProgress, containsStory, getProgressLength, updateProfile, importProfile, exportProfile } from "./profile.js";
import { STORIES_DATA } from "./stories.js";

window.updateProfile = updateProfile;

export function importFile() {
    document.getElementById('file-input').click();
}

export function exportFile() {
    exportProfile();
}

window.importFile = importFile;
window.exportFile = exportFile;

function setupProfileName() {
    let elem = document.getElementById('form-name');
    if (elem) {
        elem.value = getName();
    }
}

function setupProgress() {
    let elem = document.getElementById('progress-container');
    if (elem) {
        if (getProgressLength() == 0) {
            elem.innerHTML = 'No progress yet.';
        } else {
            for (let story of STORIES_DATA) {
                if (containsStory(story.story)) {
                    let currentLevel = getProgress(story.story);
                    let totalLevels = story.total_levels;
                    let newElem = document.createElement('span');
                    newElem.innerHTML = `
                    <b>${story.title}</b>: 
                    <span class="progress-current">${currentLevel}<span>
                    <span class="progress-sep">/</span>
                    <span class="progress-total">${totalLevels}</span>
                    `;
                    elem.appendChild(newElem);
                }
            }
        }
    }
}

function handleFileRead(event) {
    const fileContent = event.target.result;
    importProfile(fileContent);
    window.location.reload();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = handleFileRead;
        reader.readAsText(file);
    } else {
        console.log('No file selected');
    }
}

setupProfileName();
setupProgress();
document.getElementById('file-input').addEventListener('change', handleFileUpload);