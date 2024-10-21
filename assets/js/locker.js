import { getName, getProgress, containsStory, getProgressLength, updateProfile } from "./profile.js";

function lockElement(element) {
    // Check if the element is an image
    if (element.tagName === 'IMG') {
        // Change the image src to a placeholder
        element.src = '/assets/img/placeholder.jpg'; // Placeholder image URL
    } 
    //Check if lock region
    else if (element.tagName === 'LOCK-REGION') {
        element.innerHTML = 'Locked';
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
        // Change the value or text content to "Locked"
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = 'Locked';
        } else {
            element.textContent = 'Locked';
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
        lockElement(document.getElementById(elemId));
    }
}
