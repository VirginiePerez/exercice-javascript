// Demande à l'utilisateur d'entrer la distance parcourue en mètres
let distance = parseFloat(prompt("Entrez la distance parcourue en mètres :"));

// Demande à l'utilisateur d'entrer le temps en secondes
let temps = parseFloat(prompt("Entrez le temps en secondes :"));
if(isNaN(distance )|| isNaN(temps))
{
  alert("Valeur invalide");

  // Calcul de la vitesse en mètres par seconde
}else{let vitesse = distance / temps;

// Affichage du résultat avec alert
alert("La vitesse est de : " + vitesse + " m/s");

// Affichage du résultat dans la console
console.log("La vitesse est de : " + vitesse + " m/s");

}
 

