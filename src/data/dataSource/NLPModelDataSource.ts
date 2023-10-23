import {NLPModel} from "../../domain/model/NLPModel.ts";

export default interface NLPModelDataSource {
    predict(sentence: string): Promise<NLPModel>
}