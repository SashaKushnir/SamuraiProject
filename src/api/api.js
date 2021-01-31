import axios, * as Axios from "axios"

const BaseURL = 'https:social-network.samuraijs.com/api/1.0/'

const bu_wc_h = Axios.create({
    baseURL: BaseURL,
    withCredentials: true,
    headers: {
        'API-KEY': 'fa27d1b2-0d5c-41e1-8165-6f8e31138afd'
    }
})


const bu_wc = Axios.create({
    baseURL: BaseURL,
    withCredentials: true
})
export const security = {

}

export const auth = {
    getAuthorisedData: () => {
        return bu_wc_h.get('auth/me').then(response => response.data)
    },
    logIn: (val) => {
        console.log("API_LOGIN", val)
        return bu_wc_h.post('auth/login', val).then(response => response.data)
    },
    logOut: () => {
        return bu_wc_h.delete('auth/login')
    },
    getCaptchaUrl : () => {
        return axios.get(BaseURL + 'security/get-captcha-url')
    }
}

export const users = {
    getUsers: (currentUserPage = 1, pageNumber = 10) => {
        return bu_wc.get(`users?page=${currentUserPage}&count=${pageNumber}`).then(response => response.data)
    }
}

export const profile = {
    setFriendsProfile: (friendsId) => {
        return Axios.get(BaseURL + `profile/${friendsId}`).then(response => response.data)
    },
    profileStatusPUT: (status) => {
        return bu_wc_h.put('profile/status', {
            status: status
        })
    },
    profileStatusUserIdGET: (userId) => {
        return Axios.get(BaseURL + `profile/status/${userId}`)
    },
    profilePhotoUpdatePut: (fileName) => {
        let formData = new FormData();
        formData.append("image", fileName);
        return bu_wc_h.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    profileUpdatePut : (newProfileData) => {
        return bu_wc_h.put('profile', newProfileData)}
}

export const follow = {
    unfollowReq: (requestId) => {
        return bu_wc_h.delete(`follow/${requestId}`
        ).then(response => response.data)
    },
    followReq: (requestId) => {
        return bu_wc_h.post(`follow/${requestId}`, null
        ).then(response => response.data)
    }
}

