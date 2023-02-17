const img = document.querySelector("#kocka");
const kepek = [
    'kocka01', 
    'kocka02',
    'kocka03',
    'kocka04',
    'kocka05',
    'kocka06'
];
var allapot = 0;


setInterval(valt, 1000);

function valt() {
    console.log('idő van');
    if (allapot >= 6) allapot = 0;
    allapot++;
    let path = 'images/' + kepek[allapot-1] + '.png';
    console.log(path);
    img.setAttribute('src', path)
}