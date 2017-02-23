import {View, TouchableOpacity,} from "react-native";
import {h, Component,} from 'react-unity';

export default class Touchable extends Component {
    render({onPress, style, opacity = 1, ...rest,}) {
        return h(TouchableOpacity, {
            onPress,
            style,
            activeOpacity: opacity,
            children: h(View, {
                ...rest,
            }),
        });
    }
}