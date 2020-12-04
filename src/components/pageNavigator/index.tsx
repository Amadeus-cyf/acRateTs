import React from 'react';
import PageButton from '../pageButton';
import './index.css'

interface PropsType {
    pageNumber: number,
    onPageClicked: (page : number) => void,
}

export default function pageNavigator(props : PropsType) {
    const { pageNumber, onPageClicked } = props;
    const mid : number = Math.floor(pageNumber/2);

    let numList = [];
    if (pageNumber <= 10) {
        for (let i = 0; i < pageNumber; i++) {
            numList.push(i+1);
        }
    } else {
        for (let i = 1; i <= 3; i++) {
            numList.push(i);
        }
        for (let i = mid - 2; i <= mid + 2; i++) {
            numList.push(i);
        }
        for (let i = pageNumber - 2; i <= pageNumber; i++) {
            numList.push(i);
        }
    }

    const navigatorView : Array<JSX.Element> = numList.map((num) => {
        if (num === 3 || num === mid + 2) {
            return (
                <>
                    <PageButton pageNum = { num } onPageClicked = { onPageClicked }/>
                    <span className = 'ellipsisStyle'>...</span>
                </>
            )
        }
        return <PageButton pageNum = { num } onPageClicked = { onPageClicked }/>
    })

    return(
        <>
            {navigatorView}
        </>
    )
} 
