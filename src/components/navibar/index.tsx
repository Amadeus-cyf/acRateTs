import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import store from '../../store'
import { setUser } from '../../store/action';
import avatar from '../../assets/avatar.jpeg';
import { UserType } from '../../interface/UserType';

interface StateType {
    user: UserType,
}

class navibar extends React.PureComponent<{}, StateType> {
    public constructor(props : {}) {
        super(props);
        this.state = {
            user: store.getState().user,
        }
    }

    public componentDidMount() : void {
        if (this.state.user._id === "") {
            // handle page refreshing
            if (localStorage.getItem("user") !== null) {
                const userData  = JSON.parse(localStorage.getItem("user")!);
                store.dispatch(setUser(userData));
                this.setState({
                    user: userData,
                })
            }
        }
        store.subscribe(() => {
            this.setState({
                user: store.getState().user,
            })
        });
    }
    
    public render() : JSX.Element {
        const userAvatar : String = this.state.user.avatar === "" ? avatar : this.state.user.avatar;

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
}

export default navibar;
