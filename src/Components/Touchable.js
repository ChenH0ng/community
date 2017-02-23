import {View, TouchableOpacity,} from "react-native";
import {h, Component,} from 'react-unity';

export default class Touchable extends Component {
    render({onPress, style, ...rest,}) {
        return h(TouchableOpacity, {
            onPress,
            style,
            activeOpacity: 1,
            children: h(View, {
                ...rest,
            }),
        });
    }
}