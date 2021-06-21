import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';



const Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const [movieReviews, setMovieReviews] = useState([
        {title: '라이언 일병 구하기', rating: 5, body: '일병 구하는 거 리얼 꿀잼!', key: '1'},
        {title: '라이언 이등병 구하기', rating: 4, body: '이등병 구하는 거 리얼 꿀잼!', key: '2'},
        {title: '라이언 상병 구하기', rating: 3, body: '상병 구하는 거 리얼 꿀잼!', key: '3'},
        {title: '라이언 병장 구하기', rating: 1, body: '응 병장은 안구해~', key: '4'},
    ])


    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                <MaterialIcons 
                    name="close"
                    size={24}
                    style={{...styles.modalToggle, ...styles.modalClose}}
                    onPress={() => setModalOpen(false)}
                />
                    <Text>
                        Hello from the modal :)
                    </Text>
                </View>
            </Modal>

            <MaterialIcons 
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={movieReviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})




export default Home;
