import { StateType } from '../typings/StateType';

const mapStateToProps = (state : StateType)  => {
    return {
        user: state.user,
    }
}

export default mapStateToProps;
