import StateType from '../interface/StateType';
import UserType from '../interface/UserType';

const mapStateToProps = (state : any)  => {
    return {
        user: state.user,
    }
}

export default mapStateToProps;

