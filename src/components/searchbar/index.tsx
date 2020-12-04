import React from 'react';
import { Input } from 'semantic-ui-react';

export default function searchbar(props : any) {
    const { searchbarStyle } = props;

    return (
        <Input style = {searchbarStyle} icon = 'search' placeholder='输入你想要搜索的内容吧'/>
    )
}
