import {NLPModel} from "../../domain/model/NLPModel.ts";

export default interface NLPModelDataSource {
    translate(sentence: string): Promise<NLPModel>
}