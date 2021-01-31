import React from 'react'
import UserDefaultPhoto from '../../../../images/DefaultAvatar.jpg'
import ProfileStatusWithHooks from '../Contacts/ProfileStatusWithHooks'
import s from '../Info.module.css'
import styles from './InfoShowsNEditMode.module.css'

const InfoShowsNEditMode = (props) => {
    return <div className = {styles.myWrapper}>
        <div >

            <div className={s.photos}>
                <img src={(props.profileByUserId.photos.small || props.profileByUserId.photos.large) ?
                    (props.profileByUserId.photos.small) ?
                        props.profileByUserId.photos.small : props.profileByUserId.photos.large
                    : UserDefaultPhoto} alt="Photo.small" className={s.userPhotos} />
            </div>
            <div className = {styles.marginator}>
                <b>Status: </b>
                <ProfileStatusWithHooks updateProfileStatus={props.updateProfileStatus} status={props.status} cantChangeStatus={props.cantChangeStatus} />
            </div>
            <div>
                <div >
                <div className = {styles.marginator}>
                {props.profileByUserId.lookingForAJobDescription &&
                    <div><b>Looking for a job description: </b> {props.profileByUserId.lookingForAJobDescription}</div>}
                </div>
                <div className = {styles.marginator}><b>Looking for a job : </b> {props.profileByUserId.lookingForAJob ?
                    <span> Yes </span>
                    : <span> No </span>}
                </div>
                <div className = {styles.marginator}><b>FullName: </b> {props.profileByUserId.fullName}</div>
                <div className = {styles.marginator}><b>About me: </b> {props.profileByUserId.aboutMe}</div>
                </div>

                {
                    props.cantChangeStatus ? null :
                        <div className = {styles.marginator}>
                            <button onClick={props.activateEditMode}>Edit</button>
                        </div>
                }
            </div>

        </div>
        <div ><b>Contacts: </b><div>{props.contacts}</div></div>
    </div>
}


export default InfoShowsNEditMode