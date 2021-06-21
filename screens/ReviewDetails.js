import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';



const ReviewDetails = ({ navigation, route }) => {

    const { title, body, rating } = route.params;

    console.log('rating', rating);

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={styles.rating}>
                    <Text>내 마음대로 영화 평점 : </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },

})

export default ReviewDetails;
