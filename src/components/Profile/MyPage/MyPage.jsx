import UserDefaultPhoto from '../../../images/DefaultAvatar.jpg'
import s from './MyPage.module.css'
import React from 'react'
import Contacts from './Contacts/Contacts'

const MyPage = (props) => {
  
  let contacts = Object.keys(props.profileByUserId.contacts).map(key => {
    return props.profileByUserId.contacts[key] ?  <Contacts value= {props.profileByUserId.contacts[key]} key1= {key} /> : null})
  return (
    <div>
      <div className={s.MyPage}>
        <img src="https://img4.goodfon.ru/wallpaper/nbig/9/b6/strazhi-galaktiki-grut-groot-marvel-marvel-baby-groot-guardi.jpg" alt="" />
      </div>
      {props.match.params.userId === undefined ? null :
        <div className={s.NoImg}>
          <div>
          {props.profileByUserId.lookingForAJobDescription?
          <div>Looking for a job description: {props.profileByUserId.lookingForAJobDescription}</div>:null}
          <div>FullName: {props.profileByUserId.fullName}</div>
          </div>
          <div className={s.photos}>
          <img src={ (props.profileByUserId.photos.small || props.profileByUserId.photos.large)?
           (props.profileByUserId.photos.small) ?
            props.profileByUserId.photos.small : props.profileByUserId.photos.large
             : UserDefaultPhoto} alt="Photo.small" className={s.userPhotos} />
            </div> 
            <div>Contacts: <div>{contacts}</div></div>
            
     

          
        </div>
      }
    </div>
  )
}

export default MyPage