
import React,{useState,useEffect} from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import Details from './Details';
import { Like } from './Like';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 5,
    },
    imageContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        borderRadius: 18
    },
    container: {
        height: 500,
        width: 350,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius:18
        
    },

})

export const CatPoster = ({ cat, navigation }) => {

    const [catImage, setcatImage] = useState();
    useEffect(() => {
        
        //Se muestra la imagen
        if (cat.image) {
            setcatImage(cat.image.url)
        } else {
            setcatImage('https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png')
        }

    }, [cat])
    
    return (
        <View>
            <View style={styles.header}>
                <Like name={cat.name}/>
            </View>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate("Detail",{cat})}
                activeOpacity={0.8}

            >
                <View style={styles.imageContainer}>
                        <Image
                            source={{uri:catImage}}
                            style={styles.image}
                    />
                    <Details
                        title='Temperamento'
                        nameIcon='info'
                        text={cat.temperament}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
