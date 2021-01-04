import { ProxyState } from "../AppState.js";
import Question from "../Models/QuestionModel.js";
import { otdb } from "./AxiosService.js";


class QuestionService {
  async getQuestion() {
    let res = await otdb.get()
    ProxyState.question = res.data.results.map(q => new Question(q))
  }
}
export const questionService = new QuestionService