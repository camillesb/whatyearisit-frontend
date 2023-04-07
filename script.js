// Script pour récupérer et afficher l'information provenant de mon webservice

fetch('https://whatyearisit-backend-iota-mocha.vercel.app/year')
//interroger mon webservice sur vercel avec la commande fetch (asynchrone) = get pour afficher la réponse
.then(response => response.json())
//.then() pour attendre la réponse du webservice avant de poursuivre l'exécution du code
//récupère info sous format json
.then(data => {
    //console.log(data.year)
    document.querySelector('#year').textContent = data.year;
})
//affiche info
.catch(error => console.error(error));

//besoin au niveau de git si toutes les dépendances ont bien été instalées 
//besoin de pusher pour installer (ex: vercel)