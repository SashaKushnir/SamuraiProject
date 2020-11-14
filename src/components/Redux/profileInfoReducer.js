import profileInfo from "./profileInfo/profileInfo"

let _idPostMCount = ''
   
const addPostM = 'AddPostM'
const makeNewM = 'makeNewM'

const profileInfoReducer = (profileInfo, action) =>{
switch (action.type) {
    case addPostM:
        _idPostMCount = profileInfo.postsObjects.length + 1
        let newPost = {
            id: _idPostMCount, message: profileInfo.newM, likesAm: 25
        }
        profileInfo.postsObjects.push(newPost)
        return profileInfo
                
    case makeNewM:
        profileInfo.newM = action.reloadPostM
        return profileInfo
    default:
        return profileInfo
   }
}
export const addPostCreateAction = () => ({ type: addPostM})
export const makeNewMCreateAction = (reloadPostM) => ({ type: makeNewM, reloadPostM: reloadPostM })

export default profileInfoReducer

 
      
