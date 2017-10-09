const {Button, TextView, ui} = require('tabris');

ui.contentView.background = '#FFC560';
// mahdolliset numerot
var  merkit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// painike
let button = new Button({
    centerX: 0, centerY: 0,
	text: 'Generoi salasana'
}).appendTo(ui.contentView);

// teksti
let naytamerkki = new TextView({
   centerX: 0, top: [button, 20],
   font: '24px'
}).appendTo(ui.contentView);

// kun painiketta painetaan kutsutaan funktio arvoMerkki
button.on('select', arvoMerkki).appendTo(ui.contentView);

function arvoMerkki() {
            shuffle(merkit); //kutsu taulukon solujen sekoitusta
			// näytä sekoitetusta taulukosta 8 solua
			naytamerkki.text = 'Miten olisi: ' + merkit[20] + merkit[31] + merkit[29] + merkit[32] + merkit[28] + merkit[25] + merkit[33] + merkit[34];
}

// taulukon solujen sekoitus
function shuffle (array) {
   var i = 0
     , j = 0
	 , temp = null
	   
   for (i = array.length - 1; i > 0; i -= 1) {
	 j = Math.floor(Math.random() * (i + 1))
	 temp = array [1]
	 array[i] = array[j]
	 array[j] = temp
   }
}
