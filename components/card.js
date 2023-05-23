import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../config/config.json'
export default function Card({ navigation }) {
    const [data, setData] = useState(null);
    const [image1, setImage1] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Carsinformation')}>
            <View style={styles.viewImage}>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={{ uri: image1 }}
                />
            </View>
            <View style={{ flexDirection: 'column', width: '70%', paddingRight: 15 }}>
                <View style={{ height: 25 }}>
                    <Text style={styles.title}>{item.manufacturer} {item.model}</Text>
                </View>

                <View style={{ flexDirection: 'row', height: 20 }}>
                    <Text>{item.scale}</Text>
                    <Text style={{ marginLeft: 30 }}>{item.brand}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 30, justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Data de Compra: {item.purchase_date}</Text>
                    {item.favorite === 1 ? (
                        <Icon name="heart" size={20} color="red" />) : (
                        <Icon name="heart" size={20} color="white" />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(config.urlRoot + 'getItens', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                let json = await response.json();
                setData(json);
                let responseImage = await fetch(config.urlRoot + 'imagem/5');
                let jsonImage = await responseImage.json();
                setImage1(jsonImage.uri);
            } catch (error) {
                console.error(error);
                setData(null);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {data ? (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        nestedScrollEnabled={true}
                    />
                ) : (
                    <Text>Nenhum produto encontrado</Text>
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#31353E',
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 20,
        marginRight: 20
    },
    viewImage: {
        width: '30%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
