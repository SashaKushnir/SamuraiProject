import s from './Info.module.css'
import React, { useState } from 'react'
import InfoShowsNEditMode from './InfoShows/InfoShowsNEditMode'
import InfoShowsEditMode from './InfoShows/InfoShowsEditMode'


const Info = React.memo (props => {

  let [editMode, setEditMode] = useState(false)
  const savePhoto = (e) => {
    props.savePhoto(e.target.files[0])
  }
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActavateEditMode = () => {
    setEditMode(false)
  }

  const formOnSubmit = (value) => {
     props.updateProfileData(value)
     .then(() => { 
      setEditMode(false)
      })  
  }
  return (
    <div className = {s.NoImg}>
        {!editMode && 
          <InfoShowsNEditMode savePhoto = {savePhoto} activateEditMode = {activateEditMode}
          profileByUserId = { props.profileByUserId} contacts = {props.contacts} cantChangeStatus = {props.cantChangeStatus}
          updateProfileStatus = {props.updateProfileStatus}  status = {props.status}
          />
      }
      {
        editMode && 
        <div>
           <InfoShowsEditMode initialValues = {props.profileByUserId} savePhoto = {savePhoto} onSubmit = {formOnSubmit} 
           deActavateEditMode = {deActavateEditMode} status = {props.status}
          profileByUserId = { props.profileByUserId}  updateProfileStatus = {props.updateProfileStatus}
          contacts = {props.contacts} canEdit = {props.canEdit}  
          />
        </div>
      }
    </div>
  )
})

export default Info


