import {Tab,} from '../components';
import {connect,} from 'react-redux';
import {h, Component,} from 'react-unity';
import ZhTabs from './ZhTabs';

class Message extends Component {
    awake() {
        this.routes = [{text: '通知', path: '/message'}, {text: '赞与感谢', path: '/message/praise'}];
    }

    handleScroll(top) {
        const {onScroll,} = this.props;
        onScroll && onScroll(top);
    }

    render({activePath, onSwipe,}) {
        if (activePath.indexOf('/message') !== 0)return null;
        return h(ZhTabs, {
            onSwipe,
            routes: this.routes,
            content: [
                h(Tab, {
                    style: {
                        height: 1000,
                    },
                    key: 0,
                    onScroll: this.handleScroll,
                }),
                h(Tab, {
                    style: {
                        flex: 1,
                        backgroundColor: 'green',
                    },
                    key: 1,
                }),
            ]
        });
    }
}

const mapProps = (state, {onSwipe,}) => ({onSwipe, ...state.router,});
export default connect(mapProps)(Message);
