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
const formInputs = form.elements

const formData = new FormData(form, submitBtn)

// console.log([...form.elements])


submitBtn.addEventListener("click",(e)=> {
    for(let i = 0; i< [...form.elements].length-1; i++){
        console.log([...form.elements][i].name)
        console.log([...form.elements][i].value)
    }
    const candidature = new Candidature()
    form.reset()
e.preventDefault()
})