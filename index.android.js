import {AppRegistry, StyleSheet, Text, View, Platform, TouchableHighlight, Dimensions, ScrollView,} from "react-native";
import {Tab, Tabs, Navigator, Slider, ZhTabs, Icon, ZhNavigator,} from "./src/Components";
import {h, Component,} from 'react-unity';
import {App,} from './src/Containers';
import {Provider,} from 'react-redux';
import store from './src/store';

const {width, height,}= Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width,
        flex: 1,
    }
});
export default class community extends Component {
    render() {
        return h(Provider, {
            store,
            children: h(App),
        });
    }
}

AppRegistry.registerComponent("community", () => community);
