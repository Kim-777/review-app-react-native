import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation, route }) => {

    const { title, body, rating } = route.params;

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>{ title }</Text>
            <Text>{ rating }</Text>
            <Text>{ body }</Text>
        </View>
    )
}


// const styles = StyleSheet.create({
//     container: {
//         padding: 24
//     }
// })

export default ReviewDetails;
