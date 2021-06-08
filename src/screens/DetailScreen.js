import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Details from '../components/Details';
import { Like } from '../components/Like';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 350
    },
    containerDescription:{
        alignContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom:5
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
        marginTop:10
    },
    iconBack: {
        backgroundColor: '#d35400',
        borderRadius: 50,
        position: 'absolute',
        top: 30,
        left: 20,
        padding: 5
    },
    containerDetails: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
    
})

export const DetailScreen = ({route, navigation}) => {
    
    const { cat } = route.params;

    return (
        <ScrollView style={styles.container} >
     
            <Image
                style={styles.image}
                source={{ uri: cat.image.url }}
                
            />
            <TouchableOpacity
                style={styles.iconBack}
                onPress={()=>navigation.goBack()}
            >
                <Icon  name="west" size={30} color="#ecf0f1" />
            </TouchableOpacity>


            <View style={styles.containerDescription}>
                <Text style={styles.title}>{cat.name}</Text>
                <Text style={styles.description}>{cat.description}</Text>
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 5,
                    flexDirection:'row'
                }}>
                    <Icon name="location-on" size={30} color="black" />
                    <Text> {cat.origin}</Text>
                </View>


                <View style={styles.containerDetails}>
                    {/* Origen */}
                    <Details title='Aseo' nameIcon='bathtub' text={cat.grooming} />
                    {/* Adaptibilidad */}
                    <Details title='Adaptabilidad' nameIcon='visibility' text={cat.adaptability} />
                    {/* Afecto */}
                    <Details title='Afecto' nameIcon='emoji-emotions' text={cat.affection_level} />
                </View>

            </View>
        </ScrollView>
    )
}
