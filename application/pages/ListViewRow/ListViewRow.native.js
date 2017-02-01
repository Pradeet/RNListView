import React from 'react';
import {View, Image, Text} from 'react-native';

import Seperator from '../../helpers/Seperator';

import styles from './ListViewRow.style'

export default class ListViewRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <View key={'ListRow' + this.props.data.id} style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/sprinklr_logo.png')}></Image>
                    <View style={styles.textContainer}>
                        <Text>{this.props.data.id} :...  {this.props.data.title + '\n'}</Text>
                        <Text>{this.props.data.body}</Text>
                    </View>
                </View>
                <Seperator/>
            </View>
        )
    }
}