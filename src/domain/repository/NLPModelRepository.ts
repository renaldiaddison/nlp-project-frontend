import {NLPModel} from "../model/NLPModel.ts";

export interface NLPModelRepository {
    translate(sentence: string): Promise<NLPModel>
}