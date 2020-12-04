import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import avatar from '../../assets/avatar.jpeg';
import UserType from '../../interface/UserType';

interface NavibarProps { 
    user: UserType,
}

const navibar = (props : NavibarProps) : JSX.Element => {
    const userAvatar : String = props.user.avatar === "" ? avatar : props.user.avatar;

    return (
        <Menu secondary>
            <Menu.Item
            name='主站'
            style={{color: 'white', position: 'absolute', top: '10px'}}
            />
            <Menu.Item
            style = {{color: 'white', position: 'absolute', right: '100px',}}>
                <Image avatar src = { userAvatar }/>
            </Menu.Item>
            <Menu.Item
            name='登陆'
            style={{color: 'white', position: 'absolute', right: '50px', top: '10px'}}
            />
            <Menu.Item
            name='注册'
            style={{color: 'white',  position: 'absolute', right: '5px', top: '10px'}}
            />
        </Menu>
    )
}

export default navibar;
