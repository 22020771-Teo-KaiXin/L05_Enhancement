import React, {useState} from 'react'
import {datasource} from "./Data.js";
import { StyleSheet, Image, TextInput, View, Text, Button, Alert} from "react-native";

const styles = StyleSheet.create({
    imagePreview: {
        width: 210,
        height: 295,
        borderRadius: 10,
        marginTop: 10,
    },
});

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);
    const [imageUrl, setImageUrl] = useState(route.params.imageUrl);

    const isValidUrl = (url) => {
        const regex = /^https:\/\/dz3we2x72f7ol\.cloudfront\.net\/expansions\/151\/en-us\/[A-Za-z0-9_-]+\.png$/;
        return regex.test(url);
    };

    const handleSave = () => {
        if (name.trim() === '') {
            Alert.alert("Name Required", "Please enter a Pokémon name.");
            return;
        }

        if (!isValidUrl(imageUrl)) {
            Alert.alert(
                "Invalid Image URL",
                "Please enter a valid Pokémon image URL from the official Pokémon website (tcg.pokemon.com).",
                [{ text: "OK" }]
            );
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

            {imageUrl && isValidUrl(imageUrl) && (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Image Preview:</Text>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.imagePreview}
                    />
                </View>
            )}

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
