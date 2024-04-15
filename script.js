class Candidature {
  constructor(
    nomEntreprise,
    technologies,
    siteInternet,
    date,
    poste,
    interet,
    posteDesc,
    reponse
  ) {
    this.nomEntreprise = nomEntreprise;
    this.date = date;
    this.reponse = false;
    this.interet = interet;
    this.poste = poste;
    this.posteDesc = posteDesc;
    this.technologies = technologies;
    this.siteInternet = siteInternet;
  }
}
const candidatureCount = document.querySelector("#candidatureCount");
const form = document.querySelector("form");
const database = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formValues = [];
  for (const [key, value] of formData) {
    formValues.push(value);
  }
  const candidature = new Candidature(...formValues);
  database.push(candidature);
  console.log(database);
  ajouterCandidature() 
  
});
const board = document.querySelector(".board");

const formToggleBtn = document.querySelector("#toggleForm");

formToggleBtn.addEventListener("click", (e) => {
  form.classList.toggle("hidden");
  form.classList.contains("hidden")
    ? (formToggleBtn.innerText = "+")
    : (formToggleBtn.innerText = "-");
});

function ajouterCandidature() {
  candidatureCount.innerText = database.length
  const newElement = document.createElement("div");
  const deleteBtn = document.createElement("button")
  deleteBtn.className = "deleteCandidature"
  deleteBtn.innerText = "X"
  newElement.className = "row"
  newElement.insertAdjacentHTML("beforeend", `
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  `)
  newElement.appendChild(deleteBtn)
  board.appendChild(newElement)
  form.reset();
}

board.addEventListener("click", (e)=> {
  if(e.target.className === "deleteCandidature"){
    database.pop()
    e.target.parentElement.remove()
    console.log(database)
    candidatureCount.innerText = database.length
  }
})