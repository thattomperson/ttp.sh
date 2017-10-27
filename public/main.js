var q = document.getElementById('quote')
var a = document.getElementById('author')
var quotes = [
    ['Hello, friend. Hello, friend?', 'Elliot Alderson'],
    ['If you pull the right strings, a puppet will dance any way you desire.', 'Whiterose']
];

var quote = quotes[Math.floor(Math.random()*quotes.length)];

q.innerText = quote[0]
a.innerText = quote[1]