import {Tab,} from '../Components';
import {connect,} from 'react-redux';
import {h, Component,} from 'react-unity';
import {View, Dimensions, Text, StyleSheet, Animated, Easing,} from 'react-native';
import {goRoute, nextRoute,} from '../behaviors';
import Message from './Message';
import ZhNavigator from './ZhNavigator';

import Home from './Home';

const {width,}=Dimensions.get('window');

class App extends Component {
    static styles = StyleSheet.create({
        visible: {},
        hidden: {}
    });
    state = {
        isUp: !!0,
    };
    top = 0;
    accumulation = 0;
    max = 30;

    handleScroll(newTop) {
        const {isUp,}=this.state;
        const oldTop = this.top;
        this.top = newTop;
        if (newTop === 0 || oldTop === 0) {
            this.forceUpdate();
        }
        if (newTop > oldTop) {
            if (this.accumulation < 0) this.accumulation = 0;
            if (isUp) {
                this.accumulation += newTop - oldTop;
                if (this.accumulation >= this.max) {
                    this.accumulation = 0;
                    this.setState({isUp: !!0});
                }
            }
        }
        else if (newTop < oldTop) {
            if (this.accumulation > 0) this.accumulation = 0;
            if (!isUp) {
                this.accumulation += newTop - oldTop;
                if (this.accumulation <= -this.max) {
                    this.accumulation = 0;
                    this.setState({isUp: !0});
                }
            }
        }
    }

    render({style, activePath,}, {isUp,}) {
        return h(View, {
            style: {
                flex: 1,
            },
            children: [
                h(Home, {
                    onScroll: this.handleScroll,
                    onSwipe: this.handleScroll.bind(this,0),
                }),
                h(Message, {
                    onScroll: this.handleScroll,
                    onSwipe: this.handleScroll.bind(this,0),
                }),
                h(ZhNavigator, {
                    visible: this.top === 0 || isUp,
                }),
            ],
        });
    }
}

const mapProps = (state, {style,}) => {
    const {activePath,}=state.router;
    return {
        activePath,
    };
};
const mapDispatch = () => ({});
export default connect(mapProps, mapDispatch)(App);



