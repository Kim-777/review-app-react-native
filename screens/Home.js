import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {

    const [movieReviews, setMovieReviews] = useState([
        {title: '라이언 일병 구하기', rating: 5, body: '일병 구하는 거 리얼 꿀잼!', key: '1'},
        {title: '라이언 이등병 구하기', rating: 4, body: '이등병 구하는 거 리얼 꿀잼!', key: '2'},
        {title: '라이언 상병 구하기', rating: 3, body: '상병 구하는 거 리얼 꿀잼!', key: '3'},
        {title: '라이언 병장 구하기', rating: 1, body: '응 병장은 안구해~', key: '4'},
    ])


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={movieReviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


export default Home;
