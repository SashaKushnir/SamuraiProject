//Profile
export const getPostsObjectsSel = (state) => state.profileInfo.postsObjects
export const getProfileByUserIdSel = (state) => state.profileInfo.profileByUserId
export const getStatusSel = (state) => state.profileInfo.status

//Auth
export const getDefAuthorisedUserIdSel = (state) => state.authInfo.data.id
export const getIsAuthFetchingSel = (state) =>    state.authInfo.isFetching
export const getAuthDataSel = (state) =>    state.authInfo.data
export const getIsAuthSel = (state) => state.authInfo.isAuthorised

//User
export const getUserListSel = (state) => state.usersInfo.UserList
export const getCurrentUserPageSel = (state) => state.usersInfo.currentUserPage
export const getTotalUserPagesSel = (state) => state.usersInfo.totalUserPages
export const getPageNumbersSel = (state) => state.usersInfo.pageNumber
export const getTotalUserItemsSel = (state) => state.usersInfo.totalUserItems
export const getIsUserFetchingSel = (state) => state.usersInfo.isFetching
export const getButtonIsEnableSel = (state) =>  state.usersInfo.buttonIsEnable

//App
export const getIsInitializedSel = (state) =>    state.appInfo.isInitialized

//Dialogs
export const getD_MessagesInfoSel = (state) => state.dialogsInfo.d_MessagesInfo
export const getD_FriendsInfoSel = (state) => state.dialogsInfo.d_FriendsInfo


