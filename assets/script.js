const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Sélectionne les éléments des flèches
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

// Ajoute un gestionnaire d'événements pour les flèches gauche et droite
leftArrow.addEventListener("click", function() {
  // Phrase qui apparaît lors du clic sur la flèche gauche
  console.log("Flèche gauche");
});

rightArrow.addEventListener("click", function() {
  // Phrase qui apparaît lors du clic sur la flèche droite
  console.log("Flèche droite");
});
