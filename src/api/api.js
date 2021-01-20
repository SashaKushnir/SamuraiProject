import * as Axios from "axios"

const BaseURL = 'https:social-network.samuraijs.com/api/1.0/'

const bu_wc_h = Axios.create({
    baseURL: BaseURL,
    withCredentials: true,
    headers: {
        'API-KEY': '6ce8c4a0-67a0-443e-9b64-ffd10f11c7a5'
    }
})


const bu_wc = Axios.create({
    baseURL: BaseURL,
    withCredentials: true
})
export const security = {

}

export const auth = {
    getAuthorisedData : () => {
        return bu_wc.get('auth/me').then(response => response.data)
    },
    logIn : (email,password,rememberMe,captcha) => {
        return bu_wc.post('auth/login',{
            email,password,rememberMe,captcha
        }).then(response => response.data)
    },
    logOut : () => {
        return bu_wc.delete('auth/login')
    }    
}

export const users = {
    getUsers : (currentUserPage = 1, pageNumber = 10) => {
        return bu_wc.get(`users?page=${currentUserPage}&count=${pageNumber}`).then(response => response.data)
}
}

export const profile = {
    setFriendsProfile : (friendsId) => {
        return Axios.get(BaseURL + `profile/${friendsId}`).then(response => response.data)
    },
    profileStatusPUT : (status) => {
        return bu_wc_h.put('profile/status', {
            status : status
        })
    },
    profileStatusUserIdGET : (userId) => {
        return Axios.get(BaseURL + `profile/status/${userId}`)
    }
}

export const follow = {
    unfollowReq: (requestId) => {
        return bu_wc_h.delete(`follow/${requestId}`
        ).then(response => response.data)
    },
    followReq: (requestId) => {
        return bu_wc_h.post(`follow/${requestId}`, null
        ).then (response => response.data)
    }
}

