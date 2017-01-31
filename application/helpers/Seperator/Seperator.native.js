import React from 'react';
import {View} from 'react-native';

import styles from './Seperator.style'

export default class Seperator extends React.Component {

    render() {
        return (
            <View
                style={styles.separator}
                {...this.props} />
        )
    }
}