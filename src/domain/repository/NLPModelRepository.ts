import {NLPModel} from "../model/NLPModel.ts";

export interface NLPModelRepository {
    predict(sentence: string): Promise<NLPModel>
}