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

const candidatureTest = new Candidature("helloWork", "11/11/11", true, "3", "Dev front end", "intégrateur", "HTML/CSS/JS")

console.log(candidatureTest)