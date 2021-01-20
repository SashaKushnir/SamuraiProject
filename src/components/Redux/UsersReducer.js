import { follow, users } from '../../api/api'

const setU = 'setU'
const setTotalCount = 'setTotalCount'
const changeCurrentPage = 'changeCurrentPage'
const toFetch = 'toFetch'
const stopFetch = 'stopFetch'
const SET_FOLLOWED = 'SET_FOLLOWED'
const SET_UNFOLLOWED = 'SET_UNFOLLOWED'
const BUTTON_AVAILABLE = 'BUTTON_AVAILABLE'




let initialUser = {
   UserList: [],
   currentUserPage: 1,
   totalUserPages: 0,
   pageNumber: 5,
   totalUserItems: '',
   isFetching: false,
   buttonIsEnable: []

}

const usersInfoReducer = (usersState = initialUser, action) => {
   let usersStateCopy

   switch (action.type) {

      case setU:
         return {
            ...usersState,
            UserList: [...action.array,
            { photos: { ...action.array.photos } }
            ]
         }

      case setTotalCount:
         return {
            ...usersState,
            totalUserItems: action.totalCount
         }

      case changeCurrentPage:

         return {
            ...usersState,
            currentUserPage: action.newPageIndex
         }

      case toFetch:

         return {
            ...usersState,
            isFetching: true
         }

      case stopFetch:

         return {
            ...usersState,
            isFetching: false
         }

      case SET_FOLLOWED:
         usersStateCopy = {
            ...usersState,
            UserList: [...usersState.UserList,
            {
               photos: { ...usersState.UserList.photos }
            }
            ]
         }
         usersStateCopy.UserList[action.findex].followed = true

         return usersStateCopy

      case SET_UNFOLLOWED:
         usersStateCopy = {
            ...usersState,
            UserList: [...usersState.UserList,
            {
               photos: { ...usersState.UserList.photos }
            }
            ]
         }
         usersStateCopy.UserList[action.unfindex].followed = false

         return usersStateCopy

      case BUTTON_AVAILABLE:
         if (action.status) {
            return {
               ...usersState,
               buttonIsEnable: [...usersState.buttonIsEnable.filter(val => action.ID === val ? false : true)]
            }
         } else
         return {
            ...usersState,
            buttonIsEnable: [...usersState.buttonIsEnable, action.ID]
         }


      default:
         return usersState
   }


}

window.u = initialUser


export const setUser = (array) => ({ type: setU, array: array })
export const setTotalCounter = (totalCount) => ({ type: setTotalCount, totalCount })
export const changeCurrentPager = (newPageIndex) => ({ type: changeCurrentPage, newPageIndex })
export const isFetchingA = () => ({ type: toFetch })
export const stopFetching = () => ({ type: stopFetch })
export const setFollowed = (findex) => ({ type: SET_FOLLOWED, findex })
export const setUnfollowed = (unfindex) => ({ type: SET_UNFOLLOWED, unfindex })
export const buttonIsAvaiable = (status, ID) => ({ type: BUTTON_AVAILABLE, status, ID })
export const getUsersTK =  (currentUserPage, pageNumber) =>{
   return  (dispatch) => {
   dispatch(isFetchingA())
   users.getUsers(currentUserPage, pageNumber)
    .then(data => {
            dispatch(setTotalCounter(data.totalCount))
            dispatch(setUser(data.items))
            dispatch(stopFetching())
        })
      }
}
export const getUserByCursorTK = (index, pageNumber) => (dispatch) => {
   dispatch(isFetchingA())
   dispatch(changeCurrentPager(index))
   users.getUsers(index, pageNumber)
   .then(data => {
      dispatch(setUser(data.items))
      dispatch(stopFetching())
   })
} 
export const unfollowCircle = (idForBut, index) => (dispatch) =>{
dispatch(buttonIsAvaiable(false, idForBut))
follow.unfollowReq(idForBut)
.then(data => {
   
    if(data.resultCode === 0)  
    dispatch(setUnfollowed(index))
    else console.log('error')
    dispatch(buttonIsAvaiable(true,idForBut))
})}

export const followCircle = (idForBut, index) => (dispatch) => {
   dispatch(buttonIsAvaiable(false,idForBut))
   follow.followReq(idForBut)
   .then(data => {
       if(data.resultCode === 0)
       dispatch(setFollowed(index))
       else console.log('error')
       dispatch(buttonIsAvaiable(true,idForBut))
   })
}
export default usersInfoReducer



