import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'd9ff267c-5f8e-49ce-94fa-84c6523aefd6'
    }
});

export const usersAPI = {

    getUsers (currentPage = 1, pageCapacity = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageCapacity}`).then(response => response.data);
    },
    setUnfollow (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    setFollow (userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getAuthorizationStatus () {
        return instance.get('auth/me').then(response => response.data);
    },
    getProfileStatus (userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    changeProfileStatus (status) {
        return instance.put(`profile/status/`, {status}).then(response => response.data);
    }
}

export const loginAPI = {
    login (email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    },
    logOut () {
        return instance.delete('auth/login').then(response => response.data);
    }
}
