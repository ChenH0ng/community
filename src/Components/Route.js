import {StyleSheet, Text,} from "react-native";
import {h, Component,} from 'react-unity';
import {PropTypes,} from 'react';

export default class Route extends Component {
    static styles = StyleSheet.create({
        icon: {
            fontFamily: 'FontAwesome',
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    });
    static contextTypes = {
        path: PropTypes.string
    };
    static childContextTypes = {
        path: PropTypes.string
    };

    getChildContext() {
        return {
            path: this.props.path,
        }
    }

    render({path, render, children, ...rest,},) {
        console.log(this.context);
        return children || null;
    }
}
