import {connect,} from 'react-redux';
import {ZhNavigator,} from '../components';
import {goRoute,} from '../behaviors';

const mapProps = (state, {visible,}) => ({
    routes: [
        {icon: 'safari', path: '/home'},
        {icon: 'bell', path: '/message',},
        {icon: 'user', path: 'c'},
    ],
    ...state.router,
    visible,
    onPress: goRoute,
});
export default connect(mapProps)(ZhNavigator);