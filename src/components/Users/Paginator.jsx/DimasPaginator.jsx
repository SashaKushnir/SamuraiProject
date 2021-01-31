
import React from 'react'
import s from '../Users.module.css'

const DimasPaginator = ({currentArrayElement, ...props}) => {
    let pageNumberItems = []
    let curEmpP =  props.currentUserPage
    
    let n = props.pageNumber
    let totEmpP = Math.ceil(props.totalUserItems / n)
    for (let i = 1; i <= totEmpP; i++) {
        pageNumberItems.push(i)
    }
    let leftBorder = (curEmpP - 1) * n + 1;
    let rightBorder = curEmpP * n;
    let output = pageNumberItems.filter(val => val >= leftBorder && val <= rightBorder)
        .map((val) => <span key = {val} onClick={() => props.getLocalUsersByDimaTK(val, n)}
         className={currentArrayElement === val ? s.selectedItem : s.item}>{val} </span>)


    const change5PaginatorsMin = () => {
        props.setNonLocalUsersByDimaTK(leftBorder - n, n, curEmpP - 1)
    }
    const change5PaginatorsMax = () => {
        props.setNonLocalUsersByDimaTK(rightBorder + 1, n, curEmpP + 1)
    }

    return (
        <div>
            <button onClick={change5PaginatorsMin}>
                Previous {n}
            </button>
            {
                output
            }
            <button onClick={change5PaginatorsMax}>
                Next {n}
            </button>
        </div>
    )
}

export default DimasPaginator




