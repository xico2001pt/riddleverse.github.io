import { getProgress } from "./profile.js";
import { getStoryData } from "./stories.js";

function lockElement(element, message) {
    // Check if the element is an image
    if (element.tagName === 'IMG') {
        // Change the image src to a placeholder
        element.src = '/assets/img/placeholder.jpg'; // Placeholder image URL
    } 
    //Check if lock region
    else if (element.tagName === 'LOCK-REGION') {
        element.innerHTML = message;
        element.classList.add('locked-region');
    }
    // Check if the element has children
    else if (element.children && element.children.length > 0) {
        // Recursively call the function for each child
        for (let i = 0; i < element.children.length; i++) {
            lockElement(element.children[i]);
        }
    }
    // If the element is neither an image nor has children, change its value
    else {
        // Change the value or text content to message
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = message;
        } else {
            element.textContent = message;
        }
    }
    if (element.href) {
        element.href = '';
        element.classList.add('unclickable');
    } 
}

export function updateLockbyLevel(elemId, story, minLevel) {
    let currLevel = getProgress(story);
    if (currLevel < minLevel) {
        lockElement(document.getElementById(elemId), 'Locked');
        return;
    }
    let unlocker_function = getStoryData(story);
    if (unlocker_function && !unlocker_function(currLevel)) {
        lockElement(document.getElementById(elemId), 'Come back later!');
        return;
    }
}
