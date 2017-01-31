import React from 'react';
import {Text, Button, StyleSheet, View, TouchableHighlight, Image} from 'react-native';

import styles from './Toolbar.style'

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableBackPress: !(props.hasOwnProperty('onBackPress')),
            disableSubmitButton: !(props.hasOwnProperty('onSubmitButton')),
            submitText: (props.hasOwnProperty('submitText')) ? props.submitText : 'save',
        }
    }

    renderBackPress = () => {
        if(!this.state.disableBackPress) {
            return(
                <TouchableHighlight onPress={this.props.onBackPress}>
                    <Image
                        style={styles.backButton}
                        source={require('../../assets/images/navigation_back_arrow.png')} />
                </TouchableHighlight>
            )
        }
    };

    renderSubmit = () => {
        if(!this.state.disableSubmitButton) {
            return(
                <TouchableHighlight onPress={this.props.onSubmitButton}>
                    <Text style={styles.submitText}>
                        {this.state.submitText}
                    </Text>
                </TouchableHighlight>
            )
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderBackPress()}
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        {this.props.title}
                    </Text>
                </View>
                {this.renderSubmit()}
            </View>
        )
    }
}

ToolBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    disableBackPress: React.PropTypes.bool,
    disableSubmitButton: React.PropTypes.bool,
    onBackPress: React.PropTypes.func,
    onSubmitButton: React.PropTypes.func,
};