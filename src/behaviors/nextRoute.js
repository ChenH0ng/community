import {updateNextPath,} from '../actions';
import {dispatch,} from '../store';

export default path => {
    dispatch(updateNextPath(path));
};
