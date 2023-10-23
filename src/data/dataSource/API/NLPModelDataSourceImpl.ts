import NLPModelDataSource from "../NLPModelDataSource.ts";
import {NLPModel} from "../../../domain/model/NLPModel.ts";
import axios from "axios";
import {NLPModelEntity} from "./entity/NLPModelEntity.ts";

const BASE_URL = "http://localhost:8080/model";

export default class NLPModelDataSourceImpl implements NLPModelDataSource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL,
        transformRequest: [function (response) {
            let resp

            try {
                resp = JSON.parse(response)
            } catch (error) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
            }

            if (resp.status === 'OK') {
                if (resp.data) {
                    return resp.data.map((item: NLPModelEntity): NLPModel => ({
                        sentence: item.sentence
                    }))
                }
                return resp.data
            } else {
                throw Error(`[requestClient] Request failed with reason -  ${response}`)
            }
        }]
    })

    async predict(sentence: string): Promise<NLPModel> {
        try {
            const response = await this.axiosInstance({
                method: "post",
                url: "translate",
                data: {
                    sentence: sentence
                }
            })
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}