import { Fetch } from './Fetcher';

class API {
    static async getImages() {
        const response = await Fetch.get('images', {});
        return response;
    }
}

export default API;