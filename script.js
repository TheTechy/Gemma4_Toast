// script.js

// Function to show toast message
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Function to set position of the toast
function setPosition(position) {
    const toast = document.querySelector('.toast');
    if (toast) {
        toast.style.position = 'fixed';
        if (position === 'top-right') {
            toast.style.top = '10px';
            toast.style.right = '10px';
        } else if (position === 'top-left') {
            toast.style.top = '10px';
            toast.style.left = '10px';
        } else if (position === 'bottom-right') {
            toast.style.bottom = '10px';
            toast.style.right = '10px';
        } else {
            toast.style.bottom = '10px';
            toast.style.left = '10px';
        }
    }
}

// Function to set animation for the toast
function setAnimation(animationType) {
    const toast = document.querySelector('.toast');
    if (toast) {
        if (animationType === 'fade') {
            toast.style.transition = 'opacity 0.5s ease-in-out';
            toast.style.opacity = '1';
            setTimeout(() => { toast.style.opacity = '0'; }, 2500);
        }
    }
}

// Event listeners for interactive demo controls
document.getElementById('showToastButton').addEventListener('click', () => {
    showToast('This is a toast message!');
});

document.getElementById('setPositionButton').addEventListener('click', () => {
    setPosition(document.getElementById('positionSelect').value);
});

document.getElementById('setAnimationButton').addEventListener('click', () => {
    setAnimation(document.getElementById('animationSelect').value);
});

// Function to update code snippet display dynamically
function updateCodeSnippet(code) {
    document.getElementById('codeSnippet').innerText = code;
}

// Ensure to call updateCodeSnippet whenever you update the controls dynamically.
