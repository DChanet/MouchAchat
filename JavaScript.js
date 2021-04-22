let Classic = document.getElementById("btn-classic");
let Vert = document.getElementById("btn-jade");
let Rouge = document.getElementById("btn-candy");
let Bleu = document.getElementById("btn-klein");

let Commande = document.getElementById("table-body");
let Totaux = document.getElementById("totaux");
let Total = 0;


let NbCom = 1;
let tabQ = [0, 0, 0, 0];
let tabP = [5.25, 6.25, 7.25, 8.25];

let ListCom = "<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>Classic</td><td>"+ tabP[0] +"</td><td><button type='button' class='btn btn-outline-success'>Ajouter</button><button type='button' class='btn btn-outline-danger'>Supprimer</button></td></tr>";

alert('!!! Bienvenue sur MouchAchat !!!');

Classic.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Classic'");

    tabQ[0]++;
    Commande.innerHTML += "<tr class='align-items-center'><th scope='row'>"+ NbCom +"</th><td>"+ tabQ[0] +"</td><td>Classic</td><td>"+ tabP[0] +"</td><td><button type='button' class='btn btn-outline-success'>Ajouter</button><button type='button' class='btn btn-outline-danger'>Supprimer</button></td></tr>";
    Total += tabP[0];
    Totaux.innerHTML = Total;
    NbCom++;
});

Vert.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Jade Menthe'");

    tabQ[1]++;
    Commande.innerHTML += "<tr class='align-items-center'><th scope='row'>"+  NbCom+"</th><td>"+ tabQ[1] +"</td><td>Jade Menthe</td><td>"+ tabP[1] +"</td><td><button type='button' class='btn btn-outline-success'>Ajouter</button><button type='button' class='btn btn-outline-danger'>Supprimer</button></td></tr>";
    Total += tabP[1];
    Totaux.innerHTML = Total;
    NbCom++;
});

Rouge.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Candy Fraise'");

    tabQ[2]++;
    Commande.innerHTML += "<tr class='align-items-center'><th scope='row'>"+  NbCom+"</th><td>"+ tabQ[2] +"</td><td>Candy Fraise</td><td>"+ tabP[2] +"</td><td><button type='button' class='btn btn-outline-success'>Ajouter</button><button type='button' class='btn btn-outline-danger'>Supprimer</button></td></tr>";
    Total += tabP[2];
    Totaux.innerHTML = Total;
    NbCom++;
});

Bleu.addEventListener('click', function() {
    alert("Vous avez ajouter à votre commande le produit 'Klein Myrtille'");

    tabQ[3]++;
    Commande.innerHTML += "<tr class='align-items-center'><th scope='row'>"+  NbCom+"</th><td>"+ tabQ[3] +"</td><td>Klein Myrtille</td><td>"+ tabP[3] +"</td><td><button type='button' class='btn btn-outline-success'>Ajouter</button><button type='button' class='btn btn-outline-danger'>Supprimer</button></td></tr>";
    Total += tabP[3];
    Totaux.innerHTML = Total;
    NbCom++;
});