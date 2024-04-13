class Candidature {
  constructor(
    nomEntreprise,
    date,
    reponse,
    interet,
    poste,
    posteDesc,
    technologies
  ) {
    this.nomEntreprise = nomEntreprise;
    this.date = date;
    this.reponse = reponse;
    this.interet = interet;
    this.poste = poste;
    this.posteDesc = posteDesc;
    this.technologies = technologies;
  }
}

const submitBtn = document.querySelector("#formSubmit")
const form = document.querySelector("form")

submitBtn.addEventListener("click",(e)=> {
    console.log(form.form)
e.preventDefault()
})
