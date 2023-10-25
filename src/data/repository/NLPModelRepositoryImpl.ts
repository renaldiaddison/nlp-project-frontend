import {NLPModelRepository} from "../../domain/repository/NLPModelRepository.ts";
import {NLPModel} from "../../domain/model/NLPModel.ts";
import NLPModelDataSource from "../dataSource/NLPModelDataSource.ts";

export default class NLPModelRepositoryImpl implements NLPModelRepository {

    private dataSource: NLPModelDataSource

    constructor(dataSource: NLPModelDataSource) {
        this.dataSource = dataSource;
    }

    translate(sentence: string): Promise<NLPModel> {
        return this.dataSource.translate(sentence);
    }

}