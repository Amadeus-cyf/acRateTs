import React from 'react';
import { Image, Header, Card, Icon } from 'semantic-ui-react';
import avatar from '../../assets/avatar.jpeg';
import background from '../../assets/background.jpeg';
import UserType from '../../interface/UserType';
import './index.css';
import { cardStyle } from './style';

interface UserCardProps {
    user: UserType,
}

const userCard = (props : UserCardProps) => { 
    const userAvatar : String = props.user.avatar === "" ? avatar : props.user.avatar;
    const userName : String = props.user.username === "" ? "未登陆" : props.user.username;
    const followerNum : Number = props.user.follower;
    const followingNum : Number = props.user.following;

    return (
        <Card style = { cardStyle.cardStyle } >
            <Image className = 'backgroundStyle' src = { background }/>
            <Image avatar src = { userAvatar } style={ cardStyle.avatarStyle }/>
            <Header size = 'medium' style={ cardStyle.userHeaderStyle }> { userName } </Header>
            <Card.Content extra>
                <Icon name = 'heart'/>
                { followerNum + ' 粉丝'}
                <Icon name = 'user outline' style = { cardStyle.iconStyle }/>
                { followingNum + ' 关注'}
            </Card.Content>
        </Card>
    )
}

export default userCard;