import React from 'react';
import { Label } from 'semantic-ui-react';
import NumberLabel from '../numberLabel';
import './index.css';
import { BangumiRankType } from '../../interface/BangumiRankType';

const labelStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0)',
    display: 'flex',
    justifyContent: 'flex-start',
}

const rankLabel = (props : BangumiRankType) => {
    const { bangumiInfo, rankNumber } = props;
    const titleBrief : string = bangumiInfo.title.length <= 30 
    ? bangumiInfo.title : bangumiInfo.title.substring(0, 30) + '...';

    return (
        <Label style = { labelStyle }>
            <NumberLabel rank = { rankNumber } width = { 20 } height = { 27 }/>
            <p className = 'titleStyle'> { titleBrief } </p>
            <p className = 'scoreStyle'> { bangumiInfo.score + ' 分' } </p>
            <p className = 'userNumberStyle'> { bangumiInfo.userNumber + '人评分' } </p>
        </Label>
    )
}

export default rankLabel;
