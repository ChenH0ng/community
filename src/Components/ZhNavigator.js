import {h, Component,} from 'react-unity';
import Navigator from './Navigator';
import {View, Text, StyleSheet, Animated, Easing, Dimensions,} from 'react-native';
import Icon from './Icon';
import Touchable from './Touchable';

const {width,}=Dimensions.get('window');
export default class ZhTabs extends Component {
    static styles = StyleSheet.create({
        container: {
            position: 'absolute',
            height: 50,
            width,
            borderTopWidth: .3,
            borderTopColor: '#ccc',
        },
        icon: {
            color: '#ddd',
            justifyContent: 'center',
        },
        activeIcon: {
            color: '#3385ff',
        },
        press: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    visible = !0;
    bottom = new Animated.Value(0);

    handlePress(path) {
        const {onPress,} = this.props;
        onPress && onPress(path);
    }

    render({style, routes, activePath, visible,}) {
        if (visible !== this.visible) {
            this.visible = visible;
            let toValue = -50;
            if (visible) toValue = 0;
            Animated.timing(
                this.bottom,
                {
                    toValue,
                    duration: 200,
                },
            ).start();
        }
        return h(Animated.View, {
            style: [ZhTabs.styles.container, {bottom: this.bottom}],
            children: h(Navigator, {
                containerStyle: style,
                children: routes.map(({icon, path,}) => h(Touchable, {
                    onPress: this.handlePress.bind(this, path),
                    style: ZhTabs.styles.press,
                    children: h(Icon, {
                        name: icon,
                        style: [ZhTabs.styles.icon, activePath.indexOf(path) === 0 ? ZhTabs.styles.activeIcon : null],
                    })
                })),
            }),
        });
    }
}
