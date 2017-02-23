import {View, Dimensions, StyleSheet,} from "react-native";
import {h, Component,} from 'react-unity';

const {width}=Dimensions.get('window');
export default class Navigator extends Component {
    static styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            width,
            height: 50,
        },
        item: {
            flex: 1,
        },
    });

    awake({children}) {
        this.styles = StyleSheet.create({
            item: {
                width: width / children.length,
            },
        });
    }

    render({containerStyle, itemStyle, children, ...rest,},) {
        return h(View, {
            ...rest,
            style: [Navigator.styles.container, containerStyle],
            children: children.map(child => h(View, {
                style: [Navigator.styles.item, this.styles.item, itemStyle,],
                children: child,
            })),
        });
    }
}
