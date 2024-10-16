import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Card({ imageSource, name, desity, latency, speed, date, advan, disadv }) {
    return <View style={styles.card}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageSource} />
        </View>
        <Text>{name}</Text>
        <Text>{desity}</Text>
        <Text>{latency}</Text>
        <Text>{speed}</Text>
        <Text>{date}</Text>
        <Text>{advan}</Text>
        <Text>{disadv}</Text>
    </View>;
}
const styles = {
    card: {
        height: 400,
        width: '90%',
        backgroundColor: 'red',
        alignSelf: 'center',
        borderRadius: 8,
        margingTop: 10,
    },
    image: {
        width: '90%',
        height: 'auto',
        borderRadius: 8,
    },
};