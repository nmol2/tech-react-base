import axios from 'axios';

interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}



export default {
    login: async function(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await axios.post('/api/login', { email, password });
            if (response.status === 200) {
                const token = response.data.token;

                // Update the local stored token
                localStorage.setItem('token', token);
                return response.data;

            } else {
                throw new Error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            throw new Error('Login failed. Please check your credentials.');
        }
    },

    logout: function() {
        // Remove the token from local storage
        localStorage.removeItem('token');
    }
}