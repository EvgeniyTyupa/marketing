import * as axios from "axios";

const baseURL = 'https://v1.nocodeapi.com/nadai/google_sheets/JvFYbgmkcEDzGuBv?tabId=sheet1&api_key=GHCmpNtnTEhcSbDjA';

export const googleApi = {
    saveDataToGoogleSheet(formData){
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;

        return axios.post(baseURL, JSON.stringify([[name, phone, email]]), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data);
    }
}