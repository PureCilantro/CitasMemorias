import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Card from "../components/Card";

import data from "../assets/infoExport";
import image from "../assets/imgImport";
import { FlatList, SafeAreaView, ScrollView } from 'react-native';

export default function ContentScreen() {
    return  (
        <SafeAreaView>
            <ScrollView snapToAlignment='center' snapToInterval={760} decelerationRate={50}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.dram} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[0].name}</Text>
                            <Text style={styles.Ltext}>{data[0].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[0].dens}</Text>
                            <Text style={styles.Rtext}>{data[0].lat}</Text>
                            <Text style={styles.Rtext}>{data[0].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[0].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[0].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.sram} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[1].name}</Text>
                            <Text style={styles.Ltext}>{data[1].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[1].dens}</Text>
                            <Text style={styles.Rtext}>{data[1].lat}</Text>
                            <Text style={styles.Rtext}>{data[1].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[1].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[1].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.sdram} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[2].name}</Text>
                            <Text style={styles.Ltext}>{data[2].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[2].dens}</Text>
                            <Text style={styles.Rtext}>{data[2].lat}</Text>
                            <Text style={styles.Rtext}>{data[2].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[2].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[2].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.rom} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[3].name}</Text>
                            <Text style={styles.Ltext}>{data[3].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[3].dens}</Text>
                            <Text style={styles.Rtext}>{data[3].lat}</Text>
                            <Text style={styles.Rtext}>{data[3].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[3].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[3].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.rdram} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[4].name}</Text>
                            <Text style={styles.Ltext}>{data[4].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[4].dens}</Text>
                            <Text style={styles.Rtext}>{data[4].lat}</Text>
                            <Text style={styles.Rtext}>{data[4].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[4].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[4].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.eeprom} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[5].name}</Text>
                            <Text style={styles.Ltext}>{data[5].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[5].dens}</Text>
                            <Text style={styles.Rtext}>{data[5].lat}</Text>
                            <Text style={styles.Rtext}>{data[5].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[5].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[5].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.cache} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[6].name}</Text>
                            <Text style={styles.Ltext}>{data[6].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[6].dens}</Text>
                            <Text style={styles.Rtext}>{data[6].lat}</Text>
                            <Text style={styles.Rtext}>{data[6].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[6].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[6].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.ddr} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[7].name}</Text>
                            <Text style={styles.Ltext}>{data[7].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[7].dens}</Text>
                            <Text style={styles.Rtext}>{data[7].lat}</Text>
                            <Text style={styles.Rtext}>{data[7].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[7].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[7].desv}</Text>
                    </View>  
                </View>
                <View style={styles.container}>
                    <Image style={styles.image} source={image.cmos} />
                    <View style={styles.column}>
                        <View style={styles.Irow}>
                            <Text style={styles.RItext}>nombre</Text>
                            <Text style={styles.RItext}>introducción</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.Ltext}>{data[8].name}</Text>
                            <Text style={styles.Ltext}>{data[8].cre}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.row}>
                            <Text style={styles.Rtext}>{data[8].dens}</Text>
                            <Text style={styles.Rtext}>{data[8].lat}</Text>
                            <Text style={styles.Rtext}>{data[8].vel}</Text>
                        </View>
                        <View style={styles.Irow}>
                            <Text style={styles.LItext}>capacidad</Text>
                            <Text style={styles.LItext}>latencia</Text>
                            <Text style={styles.LItext}>velocidad</Text>
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <Text style={styles.RItext}>Ventajas</Text>
                        <Text style={styles.desc}>{data[8].vent}</Text>
                        <Text style={styles.RItext}>Desventajas</Text>
                        <Text style={styles.desc}>{data[8].desv}</Text>
                    </View>  
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 750,
        width: '95%',
        backgroundColor: '#d4d4d4',
        alignSelf: 'center',
        borderRadius: 20,
        margingTop: 10,
        marginBottom: 10,
    },
    Rtext: {
        fontSize: 16,
        textAlign: "left",
    },
    Ltext: {
        fontSize: 16,
        textAlign: "right",
    },
    RItext: {
        fontSize: 15,
        textAlign: "left",
        color: 'gray',
    },
    LItext: {
        fontSize: 15,
        textAlign: "right",
        color: 'gray',
    },
    imageContainer: {
        alignItems: "center",
    },
    image: {
        alignSelf: 'center',
        width: '95%',
        height: '50%',
        marginTop: 12,
        borderRadius: 8,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    Irow: {
        marginHorizontal: 0,
    },
    row: {
        marginHorizontal: 10,
    },
    verticleLine: {
        borderLeftWidth: 1,
        borderLeftColor: 'gray',
        height: '100%',
    },
    desc: {
        fontSize: 18,
        margin: 10,
        textAlign: 'justify',
    },
});