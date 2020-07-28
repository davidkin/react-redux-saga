import { Fetch } from './Fetcher';

class API {
    static async getImages() {
        const response = await Fetch.get('images', {});
        return response;
    }

    static async createImage(body) {
        const response = await Fetch.post('images', { body: JSON.stringify(body) });
        return response; 
    }

    static async deleteImage(id) {
        const response = await Fetch.delete(`images/${id}`, {});
        return response;
    }

    static async updateImage(body) {
        console.log('API (update)', body);

        const response = await Fetch.put(`images/${body.id}`, { body: JSON.stringify(body) });
        return response;
    }
}

export default API;