import {ScrollView, Dimensions, StyleSheet,} from "react-native";
import {h, Component,} from 'react-unity';
import Touchable from './Touchable';

export default class Tab extends Component {
    static styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width,
        }
    });

    handleScroll(e) {
        const {onScroll} = this.props;
        onScroll && onScroll(e.nativeEvent.contentOffset.y);
    }

    render({style, ...rest,}) {
        return h(ScrollView, {
            ...rest,
            contentContainerStyle: [Tab.styles.container, style,],
            onScroll: this.handleScroll,
        });
    }
}
