// ==========Exercise 1============
// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
//
// const datasource = [
//   { key: 'a' },
//   { key: 'b' },
//   { key: 'c' },
//   { key: 'd' },
//   { key: 'e' },
//   { key: 'f' },
//   { key: 'g' },
//   { key: 'h' },
//   { key: 'i' },
//   { key: 'j' },
//   { key: 'k' },
//   { key: 'l' },
//   { key: 'm' },
//   { key: 'n' },
//   { key: 'o' },
//   { key: 'p' },
//   { key: 'q' },
//   { key: 'r' },
//   { key: 's' },
//   { key: 't' },
//   { key: 'u' },
//   { key: 'v' },
//   { key: 'w' },
//   { key: 'x' },
//   { key: 'y' },
//   { key: 'z' },
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1
//   },
//
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left'
//   }
// });
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style = {styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const Home = () => {
//   return (
//       <View style={{marginBottom: 20}}>
//         <StatusBar hidden={true}/>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//         />
//       </View>
//   );
// };
//
// export default Home;

// ==========Exercise 2============
// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet, Text, View, SectionList, TouchableOpacity} from 'react-native';
//
// const datasource = [
//   {data:[
//       {key: 'a'},
//       {key: 'e'},
//       {key: 'i'},
//       {key: 'o'},
//       {key: 'u'}
//     ],
//     title:"Vowels", bgColor: 'skyblue'
//   },
//
//   {data:[
//       {key: 'b'},
//       {key: 'c'},
//       {key: 'd'},
//       {key: 'f'},
//       {key: 'g'},
//       {key: 'h'},
//       {key: 'j'},
//       {key: 'k'},
//       {key: 'l'},
//       {key: 'm'},
//       {key: 'n'},
//       {key: 'p'},
//       {key: 'q'},
//       {key: 'r'},
//       {key: 's'},
//       {key: 't'},
//       {key: 'v'},
//       {key: 'w'},
//       {key: 'x'},
//       {key: 'y'},
//       {key: 'z'},
//     ],
//     title:"Consonants", bgColor: 'yellow'
//   },
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1
//   },
//
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left'
//   },
//
//   headerText: {
//     fontSize: 20,
//     margin: 10,
//     textAlign: 'center',
//     fontWeight: 'bold'
//   }
// });
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style = {styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const Home = () => {
//   return (
//       <View style={{marginBottom: 50, margin: 10, marginTop: 40}}>
//         <StatusBar hidden={true}/>
//         <SectionList sections={datasource} renderItem={renderItem}
//                      renderSectionHeader={({section:{title, bgColor}})=>(
//                          <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
//                      )}/>
//       </View>
//   );
// };
//
// export default Home;

//==========Exercise 3============
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SectionList, TouchableOpacity, Button, Image, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import {datasource} from './Data.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10
    },

    headerText: {
        fontSize: 20,
        marginVertical: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 5
    },

    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#CBC3E3'
    },

    textStyle: {
        fontSize: 21,
        flex: 1,
        marginLeft: 10,
        textAlign: 'left',
        fontWeight: 'bold'
    },

    imageStyle: {
        width: 210,
        height: 295,
        borderRadius: 5
    },

    buttonContainer: {
        paddingHorizontal: 20,
        borderColor: 'black',
        justifyContent: 'flex-start',
        height: 40,
        marginTop: 10,
    },

    buttonLine: {
        height: 1,
        backgroundColor: 'black',
        marginTop: 15,
        marginLeft: -10,
        marginRight: -10
    },

    sectionHeaderContainer: {
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        marginTop: 40
    },

    sectionHeader: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    sectionList: {
        flex: 1,
        paddingBottom: 10,
    },

    iconStyle: {
        marginRight: 10
    },

    footerGap: {
        height: 40,
    },
});

const Home = ({navigation}) => {

    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                {
                    navigation.navigate('Edit', {
                        index: index,
                        type: section.title,
                        key: item.key,
                        imageUrl: item.imageUrl,
                    });
                }
            }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar/>

            <Button title='ADD POKEMON'
                    onPress={()=>{navigation.navigate('Add')}}
            />

            <View style={styles.buttonLine} />

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, iconName, iconColor, headerColor } }) => (
                    <View style={[styles.sectionHeaderContainer]}>
                        <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
                            <Icon name={iconName} size={20} style={[styles.iconStyle, { color: iconColor }]} />
                            <Text style={[styles.headerText, { color: headerColor }]}>{title}</Text>
                        </View>
                    </View>
                )}
                style={styles.sectionList}
                ListFooterComponent={<View style={styles.footerGap} />}
            />

        </View>
    );
};

export default Home;

//==========Exercise 4============
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SectionList, TouchableOpacity, Button, Image, Alert } from 'react-native';
// import Icon from "react-native-vector-icons/MaterialIcons";
//
// const iphoneData = [
//     {data:[
//             { key: 'IPHONE 13', imageUrl: 'https://media.extra.com/s/aurora/100291263_800/Apple-iPhone-13-%2C-5G%2C-256GB%2C-Pink?locale=en-GB,en-*,*' },
//             { key: 'IPHONE 15', imageUrl: 'https://www.istudiosg.com/cdn/shop/files/IMG-10892834_7f73af05-91e8-40b7-83d4-ecb7265c6f3d.jpg?v=1722298752' },
//             { key: 'IPHONE 16', imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-pink_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L094RVU5SG4zSk9qR0pUVjZHdkVGbzFRUjVZcnNucDN6ME84Sk5KdjNoWnBRcmhuV0xiN2owaDd6ZUdJRlYrRThOQ3ZCbXV2YzlwSXdkdHRSZEhpZ2h4cDE1cVRHSFppYjI5Z3JnM1RaaUd3&traceId=1' }
//         ],
//         title:"PINK IPHONES", bgColor: 'lightpink', headerColor: '#E75480', iconName: 'phone-iphone', iconColor: '#E75480'
//     },
//
//     {data:[
//             { key: 'IPHONE 13 PRO MAX', imageUrl: 'https://media.wisemarket.com.pk/web-app/detail/variant/inventory_24861.webp' },
//             { key: 'IPHONE 15', imageUrl: 'https://media.wisemarket.com.pk/web-app/detail/variant/inventory_53011.webp' },
//             { key: 'IPHONE 16', imageUrl: 'https://media.wisemarket.com.pk/web-app/detail/product/apple-iphone-16-89.webp' },
//         ],
//         title:"BLUE IPHONES", bgColor: 'lightblue', headerColor: 'blue', iconName: 'phone-iphone', iconColor: 'blue'
//     },
//
//     {data:[
//             { key: 'IPHONE 11', imageUrl: 'https://media.wisemarket.com.pk/web-app/detail/variant/inventory_9310.webp' },
//             { key: 'IPHONE 15 PRO MAX', imageUrl: 'https://media.wisemarket.com.pk/web-app/detail/variant/inventory_34893.webp' },
//             { key: 'IPHONE 16 PLUS', imageUrl: 'https://media.wisemarket.com.pk/web-app/detail/product/apple-iphone-16-plus-86.webp' },
//         ],
//         title:"WHITE IPHONES", bgColor: 'white', headerColor: 'black', iconName: 'phone-iphone', iconColor: 'black'
//     },
// ];
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 50,
//         marginBottom: 50,
//         marginHorizontal: 10
//     },
//
//     headerText: {
//         fontSize: 20,
//         marginVertical: 5,
//         textAlign: 'center',
//         fontWeight: 'bold',
//         paddingVertical: 5
//     },
//
//     opacityStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 15,
//         borderWidth: 1,
//         borderColor: 'black',
//         backgroundColor: 'lightgrey'
//     },
//
//     textStyle: {
//         fontSize: 21,
//         flex: 1,
//         marginLeft: 10,
//         textAlign: 'left',
//         fontWeight: 'bold'
//     },
//
//     imageStyle: {
//         width: 210,
//         height: 295,
//         borderRadius: 3
//     },
//
//     buttonContainer: {
//         paddingHorizontal: 20,
//         borderColor: 'black',
//         justifyContent: 'flex-start',
//         height: 40
//     },
//
//     buttonLine: {
//         height: 1,
//         backgroundColor: 'black',
//         marginTop: 10,
//         marginLeft: -10,
//         marginRight: -10,
//     },
//
//     sectionHeaderContainer: {
//         borderWidth: 1,
//         borderColor: 'black',
//         overflow: 'hidden',
//         marginTop: 30
//     },
//
//     sectionHeader: {
//         paddingVertical: 2,
//         borderBottomWidth: 1,
//         borderColor: 'black',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//
//     sectionList: {
//         flex: 1,
//     },
//
//     iconStyle: {
//         marginLeft: 15
//     },
// });
//
// const renderSectionHeader = ({ section: { title, bgColor, iconName, iconColor, headerColor } }) => (
//     <View style={[styles.sectionHeaderContainer]}>
//         <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
//             <Icon name={iconName} size={20} style={[styles.iconStyle, { color: iconColor }]} />
//             <Text style={[styles.headerText, { color: headerColor }]}>{title}</Text>
//         </View>
//     </View>
// );
//
// const renderItem = ({ item }) => (
//     <TouchableOpacity
//         style={styles.opacityStyle}
//         onPress={() => Alert.alert('IPHONE Selected', `You selected ${item.key}`)}
//     >
//         <Text style={styles.textStyle}>{item.key}</Text>
//         <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
//     </TouchableOpacity>
// );
//
// const Home = () => (
//     <View style={styles.container}>
//         <StatusBar hidden={true} />
//
//         <View style={styles.buttonContainer}>
//             <Button
//                 title="ADD IPHONE"
//                 onPress={() => Alert.alert('Button Pressed', 'Add iPhone feature coming soon!')}
//             />
//         </View>
//         <View style={styles.buttonLine} />
//
//         <SectionList
//             sections={iphoneData}
//             renderItem={renderItem}
//             renderSectionHeader={renderSectionHeader}
//             keyExtractor={(item) => item.key}
//             style={styles.sectionList}
//             ListHeaderComponent={
//                 <Text
//                     style={{
//                         textAlign: 'center',
//                         fontWeight: 'bold',
//                         fontSize: 23,
//                         color: 'purple',
//                         marginBottom: 10,
//                     }}
//                 >
//                     Welcome to KX's iPhone shop!
//                 </Text>
//             } // Moves the text into the scrollable area
//         />
//     </View>
// );
//
// export default Home;
