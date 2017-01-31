import React from 'react';
import {View} from 'react-native';

import ToolBar from '../../helpers/ToolBar';
import MyListView from '../ListView';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ToolBar title="MyListView"/>
                <MyListView />
            </View>
        )
    }
}