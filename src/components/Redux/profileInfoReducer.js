

let _idPostMCount = ''
   
const addPostM = 'AddPostM'
const makeNewMes = 'makeNewMes'
const setProfileC = 'setProfileC'

let profilePage = {
    postsObjects : [
    { id: 1, message: "Hello!!!", likesAm: 25 },
    { id: 2, message: "Hello!!!", likesAm: 25 },
    { id: 3, message: "Hello!!!", likesAm: 25 }
  ],
  newM : '',
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

  }
}
const profileInfoReducer = (profileInfo = profilePage, action) =>{
    
switch (action.type) {
    case addPostM:
        _idPostMCount = profileInfo.postsObjects.length + 1
        return {
            ...profileInfo,
            postsObjects : [...profileInfo.postsObjects, 
                    {id : _idPostMCount,
                    message :  profileInfo.newM, 
                    likesAm : 25}
                ]
        }
                
    case makeNewMes:
        return {...profileInfo,
            newM : action.reloadPostM
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
    default:
        return profileInfo
   }
}
export const addPost = () => ({ type: addPostM})
export const makeNewM = (reloadPostM) => ({ type: makeNewMes, reloadPostM })
export const setProfile = (userItem) => ({ type: setProfileC, userItem  })

export default profileInfoReducer

 
      
