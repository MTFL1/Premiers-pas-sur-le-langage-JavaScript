// Définition des diapositives
const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  // Variable pour suivre l'image
  let currentSlide = 0;
  
  // Sélection des éléments du HTML
  const slideImage = document.getElementById("slideImage");
  const tagLine = document.getElementById("tagLine");
  const leftArrow = document.getElementById("left");
  const rightArrow = document.getElementById("right");
  const dots = document.querySelectorAll(".dot");
  
  // Fonction pour afficher l'image actuelle
  function showSlide() {
	// Mettre à jour l'image et le texte de l'image
	slideImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	tagLine.innerHTML = slides[currentSlide].tagLine;
  

	// Déplacer le dot
	dots.forEach((dot, index) => {
	  if (index == currentSlide) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }
  
  // Fonction pour passer à l'image suivante
  function nextSlide() {
	currentSlide++;
	if (currentSlide >= slides.length) {
	  currentSlide = 0; // Revenir à la première image si fin du tableau
	}
	showSlide();
  }
  
  // Fonction pour passer à l'image précédente
  function previousSlide() {
	currentSlide--;
	if (currentSlide < 0) {
	  currentSlide = slides.length - 1; // Revenir à la dernière image si début du tableau
	}
	showSlide();
  }
  
  // Ajoute un gestionnaire d'événements pour les flèches gauche et droite
  leftArrow.addEventListener("click", previousSlide) 
    // Phrase qui apparaît lors du clic sur la flèche gauche
  console.log("clique flèche gauche");

  rightArrow.addEventListener("click", nextSlide)  
    // Phrase qui apparaît lors du clic sur la flèche gauche
  console.log("clique flèche droite");
