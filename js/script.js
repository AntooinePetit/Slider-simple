const utilisateurs = [
  {
    avatar: "img/user1.jpg",
    nom: "Julie",
    email: "julie.pro@gmail.com",
    metier: "Mannequin",
  },
  {
    avatar: "img/user2.jpg",
    nom: "Charlotte",
    email: "imcharlotte@hotmail.fr",
    metier: "Chargée RH",
  },
  {
    avatar: "img/user3.jpg",
    nom: "Nathalie",
    email: "nathaliemouchon@yahoo.fr",
    metier: "Cadre",
  },
  {
    avatar: "img/user4.jpg",
    nom: "Sylvain",
    email: "sylvainboss@gmail.com",
    metier: "Manager",
  },
];

// Slider

// Fonction d'affichage

let index = 0

function showInfos(i) {
  index = (i + utilisateurs.length) % utilisateurs.length;
  avatar.src = utilisateurs[index].avatar;
  nom.textContent = utilisateurs[index].nom
  email.textContent = utilisateurs[index].email
  email.href = `mailto:${utilisateurs[index].email}`
  metier.textContent = utilisateurs[index].metier
}

const avatar = document.querySelector('img')
const nom = document.querySelector('h1')
const email = document.querySelector('a')
const metier = document.querySelector('p')

// Boutons du slider

const previousbtn = document.querySelector('#previous')
const nextbtn = document.querySelector('#next')

previousbtn.addEventListener('click', () => {
  showInfos(index - 1)
})
nextbtn.addEventListener('click', () => {
  showInfos(index + 1)
})

// Dark/Light mode

const switchMode = document.querySelector('#switch-mode')

switchMode.addEventListener('click', () => {
  document.body.classList.toggle('light')
  document.body.classList.toggle('dark')
})

// Affichage par défaut

showInfos(index)

// Bouton réinitialiser

document.querySelector('#reset').addEventListener('click', () => {
  index = 0
  showInfos(index)
})

// Fonction de recherche

const form = document.querySelector('form')
const search = document.querySelector('#search')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const valeurRecherche = search.value
  let i = 0
  utilisateurs.forEach((utilisateur) => {
    if(utilisateur.nom === valeurRecherche) {
      showInfos(i)
      return
    }
    i++
  })
  if(i === 4){
    window.alert('Utilisateur non trouvé !')
  }
  search.value = ""
})