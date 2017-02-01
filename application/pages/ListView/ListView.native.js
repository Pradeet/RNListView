import React from 'react';
import {ScrollView} from 'react-native';

import Row from '../ListViewRow'
import myData from '../../data/myData';

export default class MyListView extends React.Component {
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
            <ScrollView onScroll={this._onScroll} scrollEventThrottle={50}>
                {this.state.data}
            </ScrollView>
        )
    }

    _onScroll = (e) => {
        let currentOffset = e.nativeEvent.contentOffset.y;
        let contentSize = e.nativeEvent.contentSize.height;
        let directionIsDown = currentOffset > this.offset;
        console.log(currentOffset, e.nativeEvent.contentSize, this.i);
        if(directionIsDown && contentSize - currentOffset < 1100) {
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
    }
}