var isChromium = !!window.chrome;
console.log('isChromium: ' + isChromium);

var emojis = document.querySelectorAll('.emojis-inline');

// if isChromium true for each element add a class called emoji-fix
if (isChromium) {
    for (var i = 0; i < emojis.length; i++) {
        emojis[i].classList.add('emoji-fix');
    }
}