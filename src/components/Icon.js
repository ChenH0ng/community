import {StyleSheet, Text,} from "react-native";
import {h, Component,} from 'react-unity';
import map from './glyphmaps/FontAwesome.json';

export default class Icon extends Component {
    static styles = StyleSheet.create({
        icon: {
            fontFamily: 'FontAwesome',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize:20,
        },
    });

    render({style, name, ...rest,},) {
        return h(Text, {
            ...rest,
            style: [Icon.styles.icon, style,],
            children:String.fromCharCode(map[name]),
        });
    }
}