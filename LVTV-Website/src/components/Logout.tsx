import axiosClient from './axiosClient';
import { navigate } from '@reach/router';

const handleLogout = async () => {
    try {
        const response = axiosClient.post("/logout", null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response) {
            setToken(null);
            setUser("");
            navigate("/login");
        }
    } catch (error) {
        console.log(error.response.data);
    }
};