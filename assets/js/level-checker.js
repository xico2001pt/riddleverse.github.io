import { getProgress, setProgress } from './profile.js';
import { getStoryData } from './stories.js';

function checkAnswer(answer, correct) {
    if (Array.isArray(correct)) {
        return correct.some(correctAnswer => answer === correctAnswer.toLowerCase());
    } else {
        correct = correct.toLowerCase();
        return answer == correct;
    }
}

export function sendLevelAnswer(story, level) {
    let elem = document.getElementById('submission-text');
    let answer = elem.value.toLowerCase();
    let correct = getStoryData(story).solutions[level-1];
    if (checkAnswer(answer, correct)) {
        let playerLevel = getProgress(story);
        if (playerLevel < level) {
            setProgress(story, level);
        }
        updateLevelPage(story, level);
    } else {
        hideFeedback(false);
    }
}

export function updateLevelPage(story, level) {
    let playerLevel = getProgress(story);
    let hasSolved = playerLevel >= level;
    
    // Hide submission form if already solved
    let elem = document.getElementById('submission-field');
    if (elem) {
        if (hasSolved) {
            elem.style.display = 'none';
        } else {
            elem.style.display = 'block';
        }
    }
    // Hide outcome message if not solved
    elem = document.getElementById('outcome-field');
    if (elem) {
        if (!hasSolved) {
            elem.style.display = 'none';
        } else {
            elem.style.display = 'block';
        }
    }
}

export function hideFeedback(hide) {
    let elem = document.getElementById('answer-feedback');
    if (elem) {
        elem.style.display = hide ? 'none' : 'inline';
    }
}

window.sendLevelAnswer = sendLevelAnswer;
window.updateLevelPage = updateLevelPage;
window.hideFeedback = hideFeedback;

hideFeedback(true);