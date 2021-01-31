import { stopSubmit } from "redux-form"
import { profile } from "../../api/api"


let _idPostMCount = ''
   
const addPostM = 'AddPostM'
const setProfileC = 'setProfileC'
const SET_STATUS = 'SET_STATUS'
const UPDATING_PHOTO = 'UPDATING_PHOTO'
const SETTING_NEW_PROFILE_DATA = 'SETTING_NEW_PROFILE_DATA'

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
case UPDATING_PHOTO:
    return {
        ...profileInfo,
        profileByUserId : {...profileInfo.profileByUserId,
            photos : {...action.photoObj}
        }
    } 

case SETTING_NEW_PROFILE_DATA :
    return {
        ...profileInfo,
        profileByUserId : {...action.newObjData,
        contacts  : {...action.newObjData.contacts},
        photos : action.newObjData.photos || profileInfo.profileByUserId.photos 
        },
    }

    default:
        return profileInfo
   }
}

export const addPost = (post) => ({ type: addPostM,post})
export const setProfile = (userItem) => ({ type: setProfileC, userItem  })
export const setStatus = (status) => ({type : SET_STATUS, status})
export const updatingPhoto = (photoObj) => ({type : UPDATING_PHOTO, photoObj})
const setNewProfileData = (newObjData) => ({type : SETTING_NEW_PROFILE_DATA, newObjData})

export const friendsIn = (userId) => (dispatch) => {
    profile.setFriendsProfile(userId)
    .then(data => {
    console.log("Setting ProfileDaata" , data)
    dispatch(setNewProfileData(data))
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
export const savePhoto = (fileName) => (dispatch) => {
    profile.profilePhotoUpdatePut(fileName)
    .then(response => {
        
        if(response.data.resultCode === 0)
        dispatch(updatingPhoto(response.data.data.photos))
        else
        console.warn(response.messages) 
    })
}
export const updateProfileData = (newObjData) => async (dispatch) => {
    let response = await profile.profileUpdatePut(newObjData)
        console.log(response)
        if(response.data.resultCode === 0)
            dispatch(setNewProfileData(newObjData))
        else {
            dispatch(stopSubmit("editProfile", {_error : response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        } 
}
export default profileInfoReducer

 
      
