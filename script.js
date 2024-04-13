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

const form = document.querySelector("form");
const formInputs = form.elements;

// console.log([...form.elements])
const database = [];

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);
  const formValues = [];
  for (const [key, value] of formData) {
    formValues.push(value);
  }
  const candidature = new Candidature(...formValues);
  database.push(candidature)
  console.log(database)
  form.reset();
  e.preventDefault();
});

const formToggleBtn = document.querySelector("#toggleForm")

formToggleBtn.addEventListener("click", (e)=> {
    form.classList.toggle("hidden")
    form.classList.contains("hidden") ? formToggleBtn.innerText = "+" : formToggleBtn.innerText = "-"
})