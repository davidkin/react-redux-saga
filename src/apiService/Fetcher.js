import { API_DOMEN } from './constants';

export const generalOptions = {
    mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

const Fetcher = (method) => async (url, options) =>{
    const body = await fetch(`${API_DOMEN}/${url}`, {
        method,
        ...generalOptions,
        ...options
    });

    const data = await body.json();

    return data;
}

export const Fetch = {
    get: Fetcher('GET'),
    post: Fetcher('POST'),
    delete: Fetcher('DELETE'),
    put: Fetcher('PUT'),
}