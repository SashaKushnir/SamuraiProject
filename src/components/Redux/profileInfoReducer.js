import { profile } from "../../api/api"


let _idPostMCount = ''
   
const addPostM = 'AddPostM'
const setProfileC = 'setProfileC'
const SET_STATUS = 'SET_STATUS'

let profilePage = {
    postsObjects : [
    { id: 1, message: "Hello!!!", likesAm: 25 },
    { id: 2, message: "Hello!!!", likesAm: 25 },
    { id: 3, message: "Hello!!!", likesAm: 25 }
  ],
  profileByUserId : {
    userId: '',
    lookingForAJob: '',
    lookingForAJobDescription: '',
    fullName: '',
    contacts: { 
    github: '', 
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: '',
    },
    photos: {
    small: '', 
    large: ''
    }

  },
  status : ''
}
const profileInfoReducer = (profileInfo = profilePage, action) =>{
    
switch (action.type) {
    case addPostM:
        _idPostMCount = profileInfo.postsObjects.length + 1
        return {
            ...profileInfo,
            postsObjects : [...profileInfo.postsObjects, 
                    {id : _idPostMCount,
                    message :  action.post, 
                    likesAm : 25}
                ]
        }
                
case  setProfileC : 
return {
    ...profileInfo,
    profileByUserId :  {...profileInfo.profileByUserId,
    userId: action.userItem.userId,
    lookingForAJob: action.userItem.lookingForAJob,
    lookingForAJobDescription: action.userItem.lookingForAJobDescription,
    fullName: action.userItem.fullName,
    contacts: { ...profileInfo.profileByUserId.contacts,
    github: action.userItem.contacts.github, 
    vk: action.userItem.vk,
    facebook: action.userItem.facebook,
    instagram: action.userItem.instagram,
    twitter:action.userItem.twitter,
    website: action.userItem.website,
    youtube: action.userItem.youtube,
    mainLink: action.userItem.mainLink,
    },
    photos: {...profileInfo.profileByUserId.photos,
    small: action.userItem.photos.small, 
    large: action.userItem.photos.large
    }}
}
case SET_STATUS : 

return {...profileInfo,
        status : action.status    
}
    default:
        return profileInfo
   }
}
export const addPost = (post) => ({ type: addPostM,post})
export const setProfile = (userItem) => ({ type: setProfileC, userItem  })
export const setStatus = (status) => ({type : SET_STATUS, status})

export const friendsIn = (userId) => (dispatch) => {
    profile.setFriendsProfile(userId)
    .then(data => {
    dispatch(setProfile(data))
})
}

export const setProfileStatus = (userId) => (dispatch) => {
    
    profile.profileStatusUserIdGET(userId)
    .then (response => {
        dispatch(setStatus(response.data))
        
    })
}
export const updateProfileStatus = (status) => (dispatch) => {
    profile.profileStatusPUT(status)
    .then(response => {
        if(response.data.resultCode === 0)
        dispatch(setStatus(status)) 
    })
}
export default profileInfoReducer

 
      
