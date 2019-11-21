var N_titles = 4
var N_homes = 29

var ref = {
    15: 'waterfountain.html',
    13: 'romil.html'
}

function randInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

$('#title').attr('src', `static/img/title/title (${randInt(0, N_titles)+1}).png`)

var home_num = randInt(0, N_homes) + 1
if (ref[home_num]) $('#entry').attr('href', ref[home_num])
$('#home').attr('src', `static/img/home/home (${home_num}).jpg`)
