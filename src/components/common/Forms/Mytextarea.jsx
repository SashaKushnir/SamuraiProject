import React from 'react'
import s from './Mytextare.module.css'

export const Mytextarea = ({ input, meta, ...props }) => {
    
    let hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props} />
            {hasError  &&
                <div>
                    <span>
                        {meta.error}
                    </span>
                </div>}
        </div>
    )
} 

export const Myinput = ({ input, meta, ...props }) => {
    
    let hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props} />
            {hasError  &&
                <div>
                    <span>
                        {meta.error}
                    </span>
                </div>}
        </div>
    )
} 