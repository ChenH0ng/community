import {View, Dimensions, StyleSheet,} from "react-native";
import {h, Component,} from 'react-unity';

export default class Slider extends Component {
    awake({length}) {
        const {width}=Dimensions.get('window');
        this.styles = StyleSheet.create({
            container: {
                height: 3,
                backgroundColor: '#fff',
                width,
            },
            slider: {
                height: 3,
                width: width / length,
            }
        });
        return {
            offset: 0,
        }
    }

    scroll(offset) {
        this.setState({offset,});
    }

    render({containerStyle, sliderStyle, ...rest,}, {offset,}) {
        return h(View, {
            ...rest,
            style: [this.styles.container, containerStyle,],
            children: h(View, {
                style: [
                    this.styles.slider,
                    {marginLeft: offset,},
                    sliderStyle,
                ],
            }),
        });
    }
}
