import React, {useState} from 'react'
import {datasource} from "./Data.js";
import {TextInput, View, Text, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);
    const [imageUrl, setImageUrl] = useState(route.params.imageUrl);

    const isValidUrl = (url) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    const handleSave = () => {
        if (name.trim() === '') {
            Alert.alert("Name Required", "Please enter a Pokémon name.");
            return;
        }

        if (!isValidUrl(imageUrl)) {
            Alert.alert("Invalid Image URL", "Please enter a valid image URL.");
            return;
        }

        let indexNum;
        if (route.params.type === "GRASS") {
            indexNum = 0;

        } else if (route.params.type === "NORMAL") {
            indexNum = 1;

        } else if (route.params.type === "WATER") {
            indexNum = 2;
        }

        datasource[indexNum].data[route.params.index].key = name;
        datasource[indexNum].data[route.params.index].imageUrl = imageUrl;

        navigation.navigate("Home");
    };

    const handleDelete = () => {
        let indexNum;
        if (route.params.type === "GRASS") {
            indexNum = 0;

        } else if (route.params.type === "NORMAL") {
            indexNum = 1;

        } else if (route.params.type === "WATER") {
            indexNum = 2;
        }

        Alert.alert("Are you sure?", '',
            [{text: 'Yes', onPress: () => {
                    datasource[indexNum].data.splice(route.params.index, 1);
                    navigation.navigate("Home");
                }},
                { text: 'No' }]
        );
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokémon Name:</Text>
                <TextInput value={name} maxLength={20} style={{ borderWidth: 1 }}
                           onChangeText={(text) => setName(text)}
                           placeholder="Write Pokemon name here"
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput value={imageUrl} style={{ borderWidth: 1, marginBottom: 10 }}
                           onChangeText={(text) => setImageUrl(text)}
                           placeholder="Paste the image URL here"
                           multiline={true}
                           numberOfLines={2}
                />
            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="SAVE" onPress={handleSave} />
                </View>

                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="DELETE" onPress={handleDelete} />
                </View>
            </View>
        </View>
    );
};

export default Edit;
