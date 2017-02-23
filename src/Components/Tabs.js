import {ScrollView,} from "react-native";
import {h, Component,} from 'react-unity';

export default class Tabs extends Component {
    handleScroll(e) {
        const {onScroll}=this.props;
        onScroll && onScroll(e.nativeEvent.contentOffset.x);
    }

    render({...rest,}) {
        return h(ScrollView, {
            ...rest,
            keyboardDismissMode: 'on-drag',
            horizontal: true,
            pagingEnabled: true,
            showsHorizontalScrollIndicator: false,
            showsVerticalScrollIndicator: true,
            scrollEventThrottle: 200,
            onScroll: this.handleScroll,
        });
    }
}
