import React from 'react';
import PageList from '../../utils/pageList';
import PageButton from '../pageButton';
import './index.css'

interface PropsType {
    pageList: PageList | null,
    onPageClicked: (page : number) => void,
}

const pageNavigator = (props : PropsType) : JSX.Element => {
    const { pageList, onPageClicked } = props;

    const navigatorView : Array<JSX.Element> | undefined = pageList?.pages.map((num, idx) => {
        if (idx > 0 && num - pageList.pages[idx-1] !== 1) {
            return (
                <>
                    <span className = 'ellipsisStyle'>...</span>
                    <PageButton pageNum = { num } onPageClicked = { onPageClicked }/>
                </>
            )
        }
        return <PageButton pageNum = { num } onPageClicked = { onPageClicked }/>
    });

    return(
        <>
            {navigatorView}
        </>
    )
} 

export default pageNavigator;
