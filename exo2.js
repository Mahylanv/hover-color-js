// Selection
var divrouge = document.getElementsByTagName('div')
console.log(divrouge);

// Evenement
divrouge[0].addEventListener('mouseover', fonction1);

// Fonction
function fonction1() {
	divrouge[0].style.backgroundColor = 'red';
}



// Selection

// Evenement
divrouge[0].addEventListener('mouseout', fonction2);

// Fonction
function fonction2() {
	divrouge[0].style.backgroundColor = 'yellow'
}

