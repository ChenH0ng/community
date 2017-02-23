import {Tab, TbBarEntry,} from '../components';
import {connect,} from 'react-redux';
import {h, Component,} from 'react-unity';
import {Text, View,} from 'react-native';
import ZhTabs from './ZhTabs';
import {showCommunity,} from '../behaviors';

class Home extends Component {
    routes = [{text: '社区', path: '/home'}, {text: '热门话题', path: '/home/praise'}];

    handleScroll(top) {
        const {onScroll,} = this.props;
        onScroll && onScroll(top);
    }

    render({activePath, onSwipe, onEntryPress,}) {
        if (activePath.indexOf('/home') !== 0)return null;
        return h(ZhTabs, {
            onSwipe,
            routes: this.routes,
            content: [
                h(Tab, {
                    style: {
                        height: 1000,
                        backgroundColor: '#fff'
                    },
                    key: 0,
                    onScroll: this.handleScroll,
                    children: [
                        h(TbBarEntry, {
                            key: 0,
                            onPress: onEntryPress,
                        }),
                        h(TbBarEntry, {
                            key: 1,
                            onPress: onEntryPress,
                        }),
                    ]
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

const mapProps = (state, {onSwipe,}) => ({
    onSwipe, ...state.router,
    communities: [

    ],
    onEntryPress: showCommunity,
});
export default connect(mapProps)(Home);


