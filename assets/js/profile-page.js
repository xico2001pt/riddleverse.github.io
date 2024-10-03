import { getName, getProgress, containsStory, getProgressLength, updateProfile } from "./profile.js";
import { STORIES_DATA } from "./stories.js";

window.updateProfile = updateProfile;

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

setupProfileName();
setupProgress();