let Classic = document.getElementById("btn-classic");
let Vert = document.getElementById("btn-jade");
let Rouge = document.getElementById("btn-candy");
let Bleu = document.getElementById("btn-klein");

let Commande = document.getElementById("table-body");
let Totaux = document.getElementById("totaux");
let Total = 0;

let NbCom = 1;
let tabQ = [0, 0, 0, 0]; /* Quantité de produit */
let tabP = [5.25, 6.25, 7.25, 8.25]; /* Tableau de prix  */
let tabComm = []; /*Liste de commande */

/*Exemple : 
Commande.innerHTML += "<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>"+ tabQ[0] +"</td><td>Classic</td><td>"+ tabP[0] +"</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Supprimer</button></td></tr>";
*/
/*  
    Clicker sur "acheter"
    Laisser l'incrementation
    ajouter la comm dans le tab
    ensuite le récuperer depuis la meme tab
    
*/
/*
    ---Pour supprimer---
    clicker sur le bouton supprimer
    prend le numéro du produit 
    supprime le produit via le numéro
*/
/*
function sup() {
    tabComm += ["<tr class='align-items-center'><th scope='row'>Bonjour</th><td>Bonjour</td><td>Bonjour</td><td>Bonjour</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Bonjour</button></td></tr>"];
    Commande.innerHTML = tabComm;
    return 0;
}
*/
/*Commande.innerHTML = tabComm;*/

/*
let ListCom = "<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>Classic</td><td>"+ tabP[0] +"</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Supprimer</button></td></tr>";
*/

alert('!!! Bienvenue sur MouchAchat !!!');

Classic.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Classic'");

    tabQ[0]++;
    tabComm += ["<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>"+ tabQ[0] +"</td><td>Classic</td><td>"+ tabP[0] +"</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Supprimer</button></td></tr>"];
    Total += tabP[0];
    Totaux.innerHTML = Total;
    NbCom++;
    Commande.innerHTML = tabComm;
    alert(tabComm);
});

Vert.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Jade Menthe'");

    tabQ[1]++;
    tabComm += ["<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>"+ tabQ[1] +"</td><td>Jade Menthe</td><td>"+ tabP[1] +"</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Supprimer</button></td></tr>"];
    Total += tabP[1];
    Totaux.innerHTML = Total;
    NbCom++;
    Commande.innerHTML = tabComm;
});

Rouge.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Candy Fraise'");

    tabQ[2]++;
    tabComm += "<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>"+ tabQ[2] +"</td><td>Candy Fraise</td><td>"+ tabP[2] +"</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Supprimer</button></td></tr>";
    Total += tabP[2];
    Totaux.innerHTML = Total;
    NbCom++;
    Commande.innerHTML = tabComm;
});

Bleu.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Klein Myrtille'");

    tabQ[3]++;
    tabComm += "<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>"+ tabQ[3] +"</td><td>Klein Myrtille</td><td>"+ tabP[3] +"</td><td><button type='button' class='btn btn-outline-danger' id='btn-sup'>Supprimer</button></td></tr>";
    Total += tabP[3];
    Totaux.innerHTML = Total;
    NbCom++;
    Commande.innerHTML = tabComm;
});
/*
let Supprimer = document.getElementById('btn-sup');

Supprimer.addEventListener('click', function() {
    alert("Vous avez supprimer cette commande !!");
    alert(sup());
    tabComm.removeChild(tabComm[0]);
    if(tabComm.length > 0){
        tabComm[0].remove();
    }

})
*/

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-sup').addEventListener('click', sup);
})
function sup() {
    tabComm[0].removeChild(tabComm[1]);
}

let ValidComm = document.getElementById('valide-com');

ValidComm.addEventListener('click', function(){
    alert('Commande Validée');
    tabComm = [];
    Commande.innerHTML = tabComm;
    Total = null;
    Totaux.innerHTML = Total;
    NbCom = 1;
    tabQ = [0, 0, 0, 0];
});

