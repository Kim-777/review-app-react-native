import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';


const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text>안녕하세요! 이건 제가 처음 만들어 보는 리액트 네이티브 앱입니다😋</Text>
        </View>
    )
}


export default About;
