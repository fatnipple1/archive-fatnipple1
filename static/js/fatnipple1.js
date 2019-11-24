var GET = new URLSearchParams(window.location.search)

function setCookie(name, val, expires) {
    var date = new Date();
    date.setTime(date.getTime() + (expires*24*60*60*1000));

    var str = `${name}=${val}; expires=${date.toUTCString()}; path=/`
    console.log(str)
    document.cookie = str
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var N_titles = 4
var N_homes = 30

var ref = {
    15: 'fountain.html',
    13: 'romil.html',
    20: 'chavs.html'
}

function randInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

var previous = getCookie('previous')

var title = randInt(0, N_titles) + 1
var home = previous

while (previous == home)
    home = randInt(0, N_homes) + 1

if (GET.has('t')) title = GET.get('t')
if (GET.has('h')) home = GET.get('h')

if (ref[home]) $('#entry').attr('href', ref[home])
$('#home').attr('src', `static/img/home/home (${home}).jpg`)
$('#title').attr('src', `static/img/title/original/title (${title}).png`)

setCookie('previous', home, 7)