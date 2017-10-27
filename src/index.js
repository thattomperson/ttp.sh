import './resources/styles.css'


const mount = document.createElement('div')
document.body.appendChild(mount)

const content = `<div class="crt">
    <div style="max-width: 50%">
        <h1>"<span id="quote"></span>"<span class="cursor">&block;</span></h1>
        <h2 style="float: right">-- <span id="author"></span></h2>
    </div>
</div>
`

mount.innerHTML = content



var q = document.getElementById('quote')
var a = document.getElementById('author')
var quotes = [
    ['Hello, friend. Hello, friend?', 'Elliot Alderson'],
    ['If you pull the right strings, a puppet will dance any way you desire.', 'Whiterose'],
    ['If you\'re seeing me, that means you boys fucked up.', 'Irving'],
    ['Don\'t mistake my generosity for generosity.', 'Whiterose'],
    ['Give a man a gun and he can rob a bank. Give a man a bank and he can rob the world.', 'Tyrell'],
    ['I think about you a lot, Elliot. I think about that night. When we became gods.', 'Tyrell']
];

var quote = quotes[Math.floor(Math.random()*quotes.length)];

q.innerText = quote[0]
a.innerText = quote[1]