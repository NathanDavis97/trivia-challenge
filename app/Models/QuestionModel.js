


export default class Question {
  constructor({ category, difficulty, question, correct_answer, incorrect_answers }) {
    this.category = category
    this.difficulty = difficulty
    this.question = question
    this.correct_answer = correct_answer
    this.incorrect_answers = incorrect_answers
  }
  get Template() {
    return  /*html*/` 
          <div class="card col-4">
            <div class="card-header">
              ${this.question}
            </div>
            <div class="card-body">
               <p class="card-text order-1">${this.incorrect_answers[0]} ${this.incorrect_answers[1]} ${this.incorrect_answers[2]} ${this.correct_answer}</p>

             </div>
            </div>
    `
  }
}

