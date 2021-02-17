import { StateType } from '../interface/StateType';

const mapStateToProps = (state : StateType)  => {
    return {
        user: state.user,
    }
}

export default mapStateToProps;
