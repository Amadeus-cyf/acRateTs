import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import mapStateToProps from '../../utils/mapStateToProps';
import { setUser } from '../../store/action';
import Bangumis from '../home/bangumis';
import UserCard from '../../components/userCard';
import NaviSection from '../naviSection';
import BangumiSeasonType from "../../interface/BangumiSeasonType";
import getCurrentDate from './utils/getCurrentDate';
import getPreviousDate from './utils/getPreviousDate';
import RankSection from './rank';
import USER_CARD_VISIBLE_MIN_WINDOW_SIZE from '../../const/window_size_threshold';
import './index.css';
import UserType from '../../interface/UserType';

interface HomeState {
    visibility: string,
    bangumiSectionWidth: string,
    user: UserType,
}

class Home extends React.Component<{}, HomeState> {
    private currentSeason : BangumiSeasonType = getCurrentDate();
    private previousSeason : BangumiSeasonType = getPreviousDate();

    public constructor(props : {}) {
        super(props);
        this.state = {
            visibility: window.innerWidth < USER_CARD_VISIBLE_MIN_WINDOW_SIZE ? 'none' : 'block',
            bangumiSectionWidth: window.innerWidth < USER_CARD_VISIBLE_MIN_WINDOW_SIZE ? String(window.innerWidth) : '65%',
            user: store.getState().user,
        }
    }

    public componentDidMount() : void {
        // when the window size is smaller than the threshold, make user card invisible
        window.onresize = () => {
            if (window.innerWidth < USER_CARD_VISIBLE_MIN_WINDOW_SIZE) {
                this.setState({
                    visibility: 'none',
                    bangumiSectionWidth: '100%',
                });
            } else {
                this.setState({
                    visibility: 'block',
                    bangumiSectionWidth: '65%',
                });
            }
        }
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
        return (
            <div>
                <NaviSection currentTab = '主页' user = { this.state.user }/>
                <div className = 'contentStyle'>
                    <div  style = {{ width : this.state.bangumiSectionWidth }} 
                        className = 'bangumiStyle'>
                        <Bangumis year = { this.currentSeason.year } 
                            month = { this.currentSeason.month }
                            season = { this.currentSeason.season } />
                        <Bangumis year = { this.previousSeason.year } 
                            month = { this.previousSeason.month }
                            season = { this.previousSeason.season } />
                    </div>
                    <div className = 'leftSectionStyle' style = {{display: this.state.visibility}} >
                        <UserCard user = { this.state.user }/>
                        <RankSection />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);
