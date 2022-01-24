const axios = require('axios');
require('dotenv').config()
class Api {
    constructor(){
        this.api = axios.create({
            baseURL: process.env.API_URL
        })
        this.API_KEY = process.env.API_KEY
    }

    async #apiCall (request){
        try{
            return (await request()).data
        }
        catch(ex){
            console.error(ex);
            return ex
        }
    }

    async getNowPlaying(path){
        return await this.#apiCall(() => this.api.get(`${path}?api_key=${this.API_KEY}`))
    }
}

const api = new Api();
module.exports = api;