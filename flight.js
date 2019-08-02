const vols = [
{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '05/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '02/12/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
}
];

//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)

console.log(vols)

//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)

vols.forEach((vol) => {
  if
    (vol.dureeTrajet < '7'){
     console.log(vol.dureeTrajet);
  }
})

//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)

vols.forEach((vol) => {
  if
    (vol.compagnie_aerienne === 'Air france'){
    console.log(vol.destination);
  }
})



//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france

vols.forEach((vol) => {
  if
    (vol.prix < '700') {
    console.log(vol);
  }
})


//Afficher tous les vols par date :
//à partir de la date d'aujourd'hui


vols.forEach((vol) => {
  if
    (vol.date_depart > '06/27/2019') {
    console.log(vol);
  }
})


//Afficher tous les vols par date :
//avant la date d'aujourd'hui

vols.forEach((vol) => {
  if
    (vol.date_depart < '06/27/2019') {
    console.log(vol);
  }
})


//Appliquer une reduc de 20% sur chaque vol organisé après 2019 et les afficher


//Afficher tous les vols pour Paris organisés entre le "06/02/2019" et le "09/06/2019".

//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures




//EXEMPLE TASSES

/*const tasse1 = {
  poignée:'oui',
  couleur:'bleu',
  taille:'10cm',
  marque:'maisons du monde'
}
const tasse2 = {
  poignée: 'oui',
  couleur: 'jaune',
  taille: '10cm',
  marque: 'ikea'
}
const tasse3 = {
  poignée: 'oui',
  couleur: 'jaune',
  taille: '10cm',
  marque: 'maisons du monde'
}
*/
//const tasses = [tasse1, tasse2, tasse3];

/*
const tasses = [
  {
    poignée: 'oui',
    couleur: 'bleu',
    taille: '10cm',
    marque: 'maisons du monde'
  }
{
    poignée: 'oui',
    couleur: 'jaune',
    taille: '10cm',
    marque: 'ikea'
  }
{
    poignée: 'oui',
    couleur: 'jaune',
    taille: '10cm',
    marque: 'maisons du monde'
  }
]

tasses.forEach((tasse) => {
  if (tasse.marque === 'maisons du monde') {
    console.log(tasse)
  }
  //console.log(tasse.marque);
})
*/