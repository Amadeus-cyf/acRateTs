import React, { memo } from 'react';
import PageList from '../../model/pageList';
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
                <div key={ num }>
                    <span className = 'ellipsisStyle'>...</span>
                    <PageButton pageNum = { num } onPageClicked = { onPageClicked }/>
                </div>
            )
        }
        return <PageButton key={ num } pageNum = { num } onPageClicked = { onPageClicked }/>
    });

    return(
        <>
            {navigatorView}
        </>
    )
} 

export default memo(pageNavigator, (prevProps: PropsType, props : PropsType) : boolean => {
    return prevProps.pageList === props.pageList
});
