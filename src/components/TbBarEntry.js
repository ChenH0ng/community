import {
    ScrollView,
    View,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    TouchableNativeFeedback,
} from "react-native";
import {h, Component,} from 'react-unity';
import Touchable from './Touchable';

export default class TbBarEntry extends Component {
    static styles = StyleSheet.create({
        entry: {
            width: Dimensions.get('window').width,
            height: 60,
            borderBottomColor: '#ccc',
            borderBottomWidth: .3,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
        }
    });

    render({style, onPress,}) {
        return h(TouchableNativeFeedback, {
            onPress,
            children: h(View, {
                style: TbBarEntry.styles.entry,
                children: [
                    h(Image, {
                        source: require('./xuhuan.jpg'),
                        style: {
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                        }
                    }),
                    h(Text, {
                        children: '虚幻引擎4',
                        style: {
                            color: '#111',
                            marginLeft: 16,
                        }
                    }),
                ]
            }),
        });
    }
}

