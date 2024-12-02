import React, {useState} from 'react'
import {datasource} from "./Data.js";
import { TextInput, View, Text, Button, Alert } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('GRASS');
    const [imageUrl, setImageUrl] = useState('');

    const isValidUrl = (url) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    const handleSubmit = () => {
        if (name.trim() === '') {
            Alert.alert("Name Required", "Please enter a Pokémon name.");
            return;
        }

        if (!isValidUrl(imageUrl)) {
            Alert.alert('Invalid Image URL', 'Please enter a valid image URL.');
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

                <Button title="SUBMIT" onPress={handleSubmit} />
            </View>
        );
    };


export default Add;
