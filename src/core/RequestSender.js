import axios from 'axios';
import config from '../config';

export class RequestSender {

    async send(url, { body, method = 'GET', params, query, responseType } = {}) {
        if (query) {
            url = `${url}?${new URLSearchParams(query).toString()}`
        }

        try {
            const response = await axios({
                withCredentials: true,
                url: `${config.apiUrl}${url}`,
                responseType,
                data: body,
                method,
                params,
            });

            return response.data
        } catch (error) {
            console.log('error: ', error)
            const apiError = this._getApiError(error);
            if (apiError) {
                throw new Error(apiError.message);
            } else {
                throw error;
            }
        }
    };

    _getApiError(response) {
        return response && response.data && response.data.error;
    }

};
