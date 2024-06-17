import React from "react"
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    FlatList,
    ScrollView
} from "react-native"
import { MYIMG } from "./assets/constant/imgConst"
import { Colors } from "react-native/Libraries/NewAppScreen"

function ListDemo() {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    let elements = [
        {
            username: 'User 1',
            emailID: 'User@gmail.com',
            imagePath: require('./assets/images/image5.png')
        },
        {
            username: 'User 2',
            emailID: 'User2@gmail.com',
            imagePath: require('./assets/images/image3.png')

        },
        {
            username: 'User 3',
            emailID: 'User3@gmail.com',
            imagePath: require('./assets/images/image4.png')

        },
        {
            username: 'User 4',
            emailID: 'User4@gmail.com',
            imagePath: require('./assets/images/image5.png')

        },
        {
            username: 'User 5',
            emailID: 'User5@gmail.com',
            imagePath: require('./assets/images/image3.png')

        },
        {
            username: 'User 6',
            emailID: 'User6@gmail.com',
            imagePath: require('./assets/images/image4.png')

        },
        {
            username: 'User 7',
            emailID: 'User7@gmail.com',
            imagePath: require('./assets/images/image5.png')

        },
        {
            username: 'User 8',
            emailID: 'User8@gmail.com',
            imagePath: require('./assets/images/image3.png')

        },
        {
            username: 'User 9',
            emailID: 'User9@gmail.com',
            imagePath: require('./assets/images/image4.png')

        },
        {
            username: 'User 10',
            emailID: 'User10@gmail.com',
            imagePath: require('./assets/images/image5.png')

        },
       




    ];

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <><>
                    <Image source={item.imagePath} style={{ height: 100, width: 100, marginLeft: 10, borderRadius: 50 }}></Image>
                    {/* <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                        <Text style={style.text1}>Username : {item.username}</Text>
                        <Text style={style.text1}>Email ID : {item.emailID}</Text>
                    </View> */}
                </>
                </>
            </View>

        )

    }

    return (
        <View>

{/* FirsList-start */}
            <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                <FlatList
                horizontal={true}
                    data={elements}
                    renderItem={renderItem}
                />

            </View>
{/* FirsList-end */}


{/* SecondList-start */}
            <View style={{height:450}}>

                <ScrollView>
                    {elements && elements.map((item, index) => {
                        return (
                            <View style={{ flexDirection: 'row', marginBottom: 10 ,borderColor:'black',borderWidth:1,borderRadius:10,width:400,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                                <><>
                                    <Image source={item.imagePath} style={{ height: 100, width: 100, marginLeft: 10, borderRadius: 50 }}></Image>
                                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                                        <Text style={style.text1}>Username : {item.username}</Text>
                                        <Text style={style.text1}>Email ID : {item.emailID}</Text>
                                    </View>
                                </>
                                </>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
{/* /SecondList-end */}


{/* ThirdList-end */}
            <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                <FlatList
                horizontal={true}
                    data={elements}
                    renderItem={renderItem}
                />

            </View>
            {/* ThirdList-end */}

        </View>
    )
}

const style = StyleSheet.create({

    text1: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },

})

export default ListDemo
