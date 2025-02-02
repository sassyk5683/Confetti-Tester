const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();
/* Adds confetti when button is clicked */
button.addEventListener('click', () => {
    console.log('clicked!!!'); 
    jsConfetti.addConfetti({
        confettiColors: [
            'rgb(14, 101, 190)', 'rgb(199, 158, 24)', 'rgb(167, 177, 174)' , 'rgb(14, 74, 190)', 'rgb(199, 174, 24)',
        ],
});
});
/* Adds confetti intially + when you refresh the page */
button.addEventListener('click',
    jsConfetti.addConfetti({
        confettiColors: [
            'rgb(14, 101, 190)', 'rgb(199, 158, 24)', 'rgb(167, 177, 174)' , 'rgb(14, 74, 190)', 'rgb(199, 174, 24)',
        ],
})
);
