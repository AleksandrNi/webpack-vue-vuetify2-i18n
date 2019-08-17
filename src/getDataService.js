import { urls } from '@/env';
console.log(urls);

const axios = require('axios');
const path = require('path');

const api = './api/'



export class GetDataService {
    constructor() {
    }

    static async get (urlName, payload) {        
        return fetchMethod (urlName, 'GET', payload)
    }
    static async post (urlName, payload) {
        return fetchMethod (urlName, 'POST', payload )
    }
    static async put (urlName, payload) {
        return fetchMethod (urlName, 'PUT', payload )
    }
    static async delete (urlName, payload) {
        return fetchMethod (urlName, 'DELETE', payload )
    }

}



async function fetchMethod (urlName, method, payload = '') {
    const compiledUrl = path.join(process.cwd(), api ,urls[urlName])
    let response;

    switch (method) {
        case 'GET':
            response = await axios(`${compiledUrl}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json; version=v1',
                },
                params: payload
            });
            break;
        case 'POST':
        case 'PUT':
        case 'DELETE':
            response = await axios({
                method,
                url: compiledUrl,
                data: payload,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json; version=v1',
                },
            });
            break;
        default:
            response = await axios({ method, url: compiledUrl, data: payload })
            break;
    }
              
    return response.data
}