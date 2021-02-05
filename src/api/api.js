import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '68603415-4ccf-488a-9cd5-25d6e21a86b4'
    }
});

export const getUsers = (currentPage, pageCapacity) => {
    return instance.get(`users?page=${currentPage}&count=${pageCapacity}`).then(response => response.data);
}

export const getUserProfile = (userId) => {
    return instance.get(`profile/${userId}`).then(response => response.data);
}

export const getAuthorizationStatus = () => {
    return instance.get('auth/me').then(response => response.data);
}

export const setUnfollow = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data);
}

export const setFollow = (userId) => {
    return instance.post(`follow/${userId}`, {}).then(response => response.data);
}
