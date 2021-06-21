import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                {/* <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/> */}
                <Text style={styles.headerText}>🎞{' '}{title}{' '}🎥</Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        flexDirection: 'row',
    },  
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 23,
        height: 23,
        marginHorizontal: 12
    }
})


export default Header;