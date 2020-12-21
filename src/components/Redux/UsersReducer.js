
const setU = 'setU'
const setTotalCount = 'setTotalCount'
const changeCurrentPage = 'changeCurrentPage'
const toFetch = 'toFetch'
const stopFetch = 'stopFetch'




let initialUser = {
    UserList : [],
    currentUserPage : 1,
    totalUserPages : 0,
    pageNumber : 5,
    totalUserItems : '',
    isFetching : false

}

const  usersInfoReducer = (usersState = initialUser, action) => {
   
       switch (action.type){

    case setU :  
    return {
        ...usersState,
        UserList : [...action.array]
    }

 case setTotalCount :
    return{
        ...usersState,
        totalUserItems : action.totalCount
    }

 case changeCurrentPage : 

    return {
        ...usersState,
        currentUserPage : action.newPageIndex
    }

 case toFetch :

    return {
     ...usersState,
     isFetching : true
    }

 case stopFetch :
    
    return {
     ...usersState,
     isFetching : false
    }

 default:
     return usersState
}


}

/* eslint-disable */


window.u = initialUser


export const setUser = (array) => ({type : setU, array : array})
export const setTotalCounter = (totalCount) => ({type : setTotalCount, totalCount})
export const changeCurrentPager = (newPageIndex) => ({type : changeCurrentPage, newPageIndex})
export const isFetchingA = () => ({type : toFetch})
export const stopFetching = () => ({type : stopFetch})

export default usersInfoReducer



