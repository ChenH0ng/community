import {h, Component,} from 'react-unity';
import Navigator from './Navigator';
import Slider from './Slider';
import Tabs from './Tabs';
import {View, Text, StyleSheet,} from 'react-native';

export default class ZhTabs extends Component {
    static styles = {
        container: {
            flex: 1,
        },
        background: {
            backgroundColor: '#fff'
        },
        slider: {
            backgroundColor: '#0080FF'
        },
        item: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        route: {
            color: '#aaa',
        },
        activeRoute: {
            color: '#0080FF',
        }
    };

    awake() {
        this.styles = StyleSheet.create({});
    }

    handleScroll(offset) {
        const {onScroll, content,} = this.props;
        offset = offset / content.length;
        this.refs.slider.scroll(offset);
        onScroll && onScroll(offset);
    }

    render({routes, activePath, nextPath, content, style,}) {
        return h(View, {
            style: [ZhTabs.styles.container, style,],
            children: [
                h(Navigator, {
                    containerStyle: ZhTabs.styles.background,
                    itemStyle: ZhTabs.styles.item,
                    children: routes.map(({text, path,}) => h(Text, {
                        children: text,
                        style: [
                            ZhTabs.styles.route,
                            path === nextPath ? ZhTabs.styles.activeRoute : null,
                        ],
                    })),
                }),
                h(Slider, {
                    ref: 'slider',
                    containerStyle: ZhTabs.styles.background,
                    sliderStyle: ZhTabs.styles.slider,
                    length: routes.length,
                }),
                h(Tabs, {
                    onScroll: this.handleScroll,
                    children: content,
                }),
            ],
        });
    }
}
