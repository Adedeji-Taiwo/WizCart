import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' 
? import.meta.env.VITE_LOCAL_SERVER_URL
: import.meta.env.VITE_HOST_SERVER_URL;

const createOrUpdateUser = async (authtoken) => {
    const response = await axios.post(
        `${baseUrl}/create-or-update-user`,
        {},
        {
            headers: {
                authtoken,
            }
        }
    );

    return response;
}


const currentUser = async (authtoken) => {
    const response = await axios.post(
        `${baseUrl}/current-user`,
        {},
        {
            headers: {
                authtoken,
            }
        }
    );

    return response;
}


const currentAdmin = async (authtoken) => {
    const response = await axios.post(
        `${baseUrl}/current-admin`,
        {},
        {
            headers: {
                authtoken,
            }
        }
    );

    return response;
}


 const authService = { createOrUpdateUser, currentUser, currentAdmin };

 export default authService;