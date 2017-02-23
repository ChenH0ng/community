import {ZhTabs,} from '../components';
import {connect,} from 'react-redux';
import {h, Component,} from 'react-unity';
import {Dimensions,} from 'react-native';
import {goRoute, nextRoute,} from '../behaviors';

const {width,}=Dimensions.get('window');

class ZhTabsContainer extends Component {
    awake({routes,}) {
        this.ranges = [];
        const length = routes.length;
        const range = width / length;
        for (let i = 0; i < length; i++) {
            const center = i * range;
            this.ranges[i] = {
                min: center - range / 2,
                center,
                max: center + range / 2,
                route: routes[i],
            }
        }
    }

    handleScroll(offset) {
        const {nextPath, onSwipe,} = this.props;
        for (let range of this.ranges) {
            const {min, center, max, route} = range;
            if (offset === center) {
                goRoute(route.path);
                onSwipe && onSwipe();
            }
            else if (nextPath !== route.path && offset >= min && offset < max) {
                nextRoute(route.path);
            }
        }
    }

    render({activePath, content, routes, nextPath,}) {
        return h(ZhTabs, {
            onScroll: this.handleScroll,
            activePath,
            nextPath,
            content,
            routes,
        });
    }
}

const mapProps = (state, {routes, onSwipe,}) => ({routes, onSwipe, ...state.router});
export default connect(mapProps)(ZhTabsContainer);
