const axios = require('axios').default;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

class Api {
    instance;

    constructor(baseURL) {
        this.instance = axios.create({
            baseURL: baseURL,
            headers: {'HH-User-Agent': 'ListOfVacancies (liliyagrebtsova@gmail.com)'}
        })
    }

    info = {
        getAll: async(params={} ) => {
            try {
                const {data} = await this.instance.get(`/vacancies`, {params})

                return data
            } catch (error) {
                console.log(error, '[Api][vacancies][getAll]')
            }
        },

        getVacancyById: async (id) => {
            try {
                const {data} = await this.instance.get(`/vacancies/${id}`)

                return data
            } catch (error) {
                console.log(error, '[Api][vacancies][getVacancyById]')
            }
        },

        getAllDictionaries: async () => {
            try {
                const {data} = await this.instance.get(`/dictionaries`)

                return data
            } catch (error) {
                console.log(error, '[Api][dictionaries][getAllDictionaries]')
            }
        }
    }
}

export const api = new Api(API_URL)

