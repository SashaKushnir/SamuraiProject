import React from 'react'
import { Field } from 'redux-form'
import { Myinput } from '../../../common/Forms/Mytextarea'



const Contacts = (props) => {
    
    return (
        <div>
            {
                !props.showInputs ?
                <span style={{margindown : "5px"}}>
                    {props.value && 
                    <div>
                        <b>{props.key1}: </b>{props.value}
                    </div>
                    }
                </span>

                : <div style={{ margin: "7px"}}>
                    {props.key1}: <Field component = {"input"}
                    placeholder = {props.key1} value = {props.value}
                    name = {"contacts." + props.key1}/>
                </div>
            }
        </div>
    )

}

export default Contacts