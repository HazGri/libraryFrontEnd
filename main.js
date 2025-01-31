const tableauLivres = document.querySelector("#tableau-livres")
const ajouterBtn = document.querySelector(".ajouter-btn")
const livreForm = document.querySelector("#livreForm")
const modifLivreForm = document.querySelector("#modifLivreForm")

const l1 = {
    nom: "La voie des rois",
    auteur: "Brandon Sanderson",
    pages: 300
}
const l2 = {
    nom: "Le sorceleur",
    auteur: "Andrzej Sapkowski",
    pages: 400
}
const l3 = {
    nom: "Les mondes d'Ewilan",
    auteur: "Pierre bottero",
    pages: 250
}
const l4 = {
    nom: "Eragon",
    auteur: "Christopher Paolini",
    pages: 250
}
//le tableau de livre
const biblio = [l1,l2,l3,l4]
//fonction qui permet d'afficher la bibliotheque de livre 

afficherLivres();
function afficherLivres(){
livreForm.classList.add("hide")
modifLivreForm.classList.add("hide")
 var tableauLivre = document.querySelector("#tableau-livres tbody");
 let livre = ""
 for(i=0; i<biblio.length;i++){
     livre += `<tr>
    <td>${biblio[i].nom}</td>
    <td>${biblio[i].auteur}</td>
    <td>${biblio[i].pages}</td>
    <td><button id="modifier" onClick="modifierLivre(${i})" class="modifier-btn btn">Modifier</button></td>
    <td><button id="supprimer" onClick="supprimerLivre(${i})" class="supprimer-btn btn">Supprimer</button></td>
    </tr>`
}
tableauLivre.innerHTML = livre
}


//la fonction qui permet de créer un formulaire pour ajouter un livre
ajouterBtn.addEventListener("click", createForm)

function createForm(e){   
    e.preventDefault()
    modifLivreForm.classList.add("hide")
    livreForm.classList.remove("hide")
}
document.querySelector("#validerBtn").addEventListener("click", function(e){
    e.preventDefault();
    var titre =  document.querySelector("#titre").value ;
    var auteur = document.querySelector("#auteur").value;
    var pages = document.querySelector("#pages").value;
    ajoutlivre(titre,auteur,pages)
    livreForm.reset()
})
//la fonction qui permet d'ajouter un livre depuis le formulaire dans le tableau biblio
function ajoutlivre(titre,auteur,pages){
    var livre = {
        nom : titre,
        auteur : auteur,
        pages : pages
    }
    biblio.push(livre)
    afficherLivres()
}

//Fonction pour supprimer un livre
function supprimerLivre(position){
    if(confirm("voulez vous vraiment supprimer ce livre? :(")){
        biblio.splice(position,1)
        afficherLivres()
    }
    else {

    }
} 

//fonction pour modifier un livre

function modifierLivre(position){
    livreForm.classList.add("hide")
    document.querySelector("#modifLivreForm").classList.remove("hide")
    document.querySelector("#titreModif").value = biblio[position].nom
    document.querySelector("#auteurModif").value = biblio[position].auteur
    document.querySelector("#pagesModif").value = biblio[position].pages
    document.querySelector("#modifLivreForm #identifiant").value = position
}

document.querySelector("#validerBtnModif").addEventListener("click", function(e){
    e.preventDefault();
    var titre =  document.querySelector("#titreModif").value ;
    var auteur = document.querySelector("#auteurModif").value;
    var pages = document.querySelector("#pagesModif").value;
    var positionLivre = document.querySelector("#modifLivreForm #identifiant").value 
    
    biblio[positionLivre].nom = titre;
    biblio[positionLivre].auteur = auteur ;
    biblio[positionLivre].pages = pages ;
    afficherLivres(titre, auteur, pages)
})

