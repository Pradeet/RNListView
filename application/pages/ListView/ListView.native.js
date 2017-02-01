import React from 'react';
import {ScrollView} from 'react-native';

import Row from '../ListViewRow'
import myData from '../../data/myData';

let DEFAULT_INITIAL_ROWS = 20;
let DEFAULT_SCROLL_RENDER_AHEAD = 1500;
let DEFAULT_END_REACHED_THRESHOLD = 1000;
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;

export default class MyListView extends React.Component {

    static defaultProps = {
        initialListSize: DEFAULT_INITIAL_ROWS,
        scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
        scrollCallbackThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
    };

    constructor(props) {
        super(props);



        i = 0;
        this.offset=0;
        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        let tempData = [];
        for(this.i = 0; this.i < 20; this.i++) {
            console.log('>>>>>>>> Rendering Row:', this.i);
            tempData.push(<Row data={myData[this.i]}/>);
        }
        this.setState({
            data: this.state.data.concat(tempData),
        })
    }

    render() {
        return(
            <ScrollView style={{margin: 5}} onScroll={this._onScroll} scrollEventThrottle={this.props.scrollCallbackThrottle} horizontal={false}>
                {this.state.data}
            </ScrollView>
        )
    }

    _onScroll = (e) => {
        currentOffset = e.nativeEvent.contentOffset.y;
        contentSize = e.nativeEvent.contentSize.height;
        directionIsDown = currentOffset > this.offset;

        console.log(currentOffset, e.nativeEvent.contentSize, this.i);
        if(directionIsDown && contentSize - currentOffset < this.props.scrollRenderAheadDistance) {
            let currentI = this.i;
            let temp = [];
            for(; this.i < Math.min(currentI + 5, myData.length); this.i += 1) {
                console.log('>>>>>>>> Rendering Row:', this.i);
                temp.push(<Row data={myData[this.i]}/>);
            }
            this.setState({
                data: this.state.data.concat(temp),
            });
            this.offset = currentOffset;
        }
    };
}