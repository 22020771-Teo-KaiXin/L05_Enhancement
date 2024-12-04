import React, {useState} from 'react'
import {datasource} from "./Data.js";
import { StyleSheet, TextInput, Image, View, Text, Button, Alert } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    imagePreview: {
        width: 210,
        height: 295,
        borderRadius: 10,
        marginTop: 10,
    },
});

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('GRASS');
    const [imageUrl, setImageUrl] = useState('');

    const isValidUrl = (url) => {
        const regex = /^https:\/\/dz3we2x72f7ol\.cloudfront\.net\/expansions\/151\/en-us\/[A-Za-z0-9_-]+\.png$/;
        return regex.test(url);
    };

    const handleSubmit = () => {
        if (name.trim() === '') {
            Alert.alert("Name Required", "Please enter a Pokémon name.");
            return;
        }

        if (!isValidUrl(imageUrl)) {
            Alert.alert('Invalid Image URL', 'Please enter a valid image URL from the official Pokémon website (tcg.pokemon.com).');
            return;
        }

        const item = { key: name, imageUrl: imageUrl };
        let indexNum = 0;

            if (type === "NORMAL") {
                indexNum = 1;

            } else if (type === "WATER") {
                indexNum = 2; // Index for NORMAL
            }

            if (datasource[indexNum]) {
                datasource[indexNum].data.push(item);
            }

            navigation.navigate("Home");
        };

        return (
            <View style={{ padding: 10 }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Pokémon Name:</Text>
                    <TextInput
                        style={{ borderWidth: 1 }}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Write Pokemon name here"
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            minHeight: 40,
                            padding: 10,
                            textAlignVertical: 'top', // Ensures long URLs are not cut off
                        }}
                        value={imageUrl}
                        onChangeText={(text) => setImageUrl(text)}
                        placeholder="Paste the image URL here"
                        multiline={true}
                        numberOfLines={2}
                    />

                </View>

                <View style={{ padding: 10 }}>
                    <RNPickerSelect
                        value={type}
                        onValueChange={(value) => setType(value)}
                        items={[
                            { label: "GRASS", value: "GRASS" },
                            { label: "NORMAL", value: "NORMAL" },
                            { label: "WATER", value: "WATER" }
                        ]}
                    />
                </View>

                {imageUrl && isValidUrl(imageUrl) && (
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>Image Preview:</Text>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.imagePreview} // Styling for the image
                        />
                    </View>
                )}

                <View style={{ padding: 20, marginTop: 50 }}>
                    <Button title="SUBMIT" onPress={handleSubmit} />
                </View>
            </View>
        );
    };


export default Add;
