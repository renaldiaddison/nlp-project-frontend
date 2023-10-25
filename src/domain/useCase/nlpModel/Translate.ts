import {NLPModel} from "../../model/NLPModel.ts";
import {NLPModelRepository} from "../../repository/NLPModelRepository.ts";

export interface TranslateUseCase {
    invoke: (val: string) => Promise<NLPModel>
}

export class Translate implements TranslateUseCase {
    private nlpModelRepo: NLPModelRepository

    constructor(nlpModelRepo: NLPModelRepository) {
        this.nlpModelRepo = nlpModelRepo;
    }

    invoke(val: string): Promise<NLPModel> {
        return this.nlpModelRepo.translate(val)
    }

}