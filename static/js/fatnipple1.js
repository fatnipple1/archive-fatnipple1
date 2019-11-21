var GET = new URLSearchParams(window.location.search)

var N_titles = 4
var N_homes = 30

var ref = {
    15: 'waterfountain.html',
    13: 'romil.html'
}

function randInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

var title = randInt(0, N_titles) + 1
var home = randInt(0, N_homes) + 1

if (GET.has('t')) title = GET.get('t')
if (GET.has('h')) home = GET.get('h')

if (ref[home]) $('#entry').attr('href', ref[home])
$('#home').attr('src', `static/img/home/home (${home}).jpg`)
$('#title').attr('src', `static/img/title/title (${title}).png`)
