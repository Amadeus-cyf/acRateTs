import React from 'react';
import Navibar from '../../components/navibar';
import Searchbar from '../../components/searchbar';
import SubNavibar from './subNavibar';
import './index.css';
import { UserType } from '../../typings/UserType';

const searchbarStyle = {
    position: 'relative',
    left: '15%',
    width: '40%',
    minWidth: '210px',
    height: '40px',
    top: '6px',
}

type NaviProps = {
    currentTab: string,
    user: UserType,
}

const NaviSection = ( props : NaviProps ) : JSX.Element => {
    const { currentTab, user } = props

    return (
        <div className = 'sectionStyle'>
            <div className = 'navibarStyle'>
                <Navibar user = { user } />
                <Searchbar searchbarStyle = {searchbarStyle}/>
            </div>
            <SubNavibar currentTab = { currentTab }/>
        </div>
    )
}

export default NaviSection;