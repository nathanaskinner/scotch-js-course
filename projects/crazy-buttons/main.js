// grab DOM elements
const crazyButtons = document.querySelectorAll('.btn-crazy');

// define functions
function goCrazy() {;
    // get a random number for left offset
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    // get a random number for top offset
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

    this.style.top = offsetTop + 'px'; 
    this.style.left = offsetLeft + 'px'; 
    
}

// add event listeners
crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));
