import { ProxyState } from "../AppState.js"
import { questionService } from "../Services/QuestionService.js"



function _drawQuestions() {
  let template = ''
  let question = ProxyState.question
  question.forEach(q => template += q.Template)
  if (ProxyState.question.incorrect_answers == undefined)
    question = ''
  document.getElementById('app').innerHTML = template
}

export default class QuestionController {
  constructor() {
    ProxyState.on('question', _drawQuestions)


    questionService.getQuestion();
  }
}