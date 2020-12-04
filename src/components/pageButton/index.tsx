import React from 'react';
import { Button } from 'semantic-ui-react';

type PropsType = {
    pageNum : number, 
    onPageClicked : (pageNum : number) => void,
}

export default function pageButton(props : PropsType) {
    const { pageNum, onPageClicked } = props;
    
    const clickListener = () : void => {
        onPageClicked(pageNum);
    }

    return (
        <Button style = {{ marginLeft: '5pt', marginRight: '5pt', marginTop: '3pt'}}
        color = 'blue' onClick = { clickListener } size = 'tiny'> { pageNum } </Button>
    )
}
