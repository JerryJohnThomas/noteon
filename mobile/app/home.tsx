import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const home = () => {
    const [fontsLoaded, error] = useFonts({
        "Urbanist-Black": require("../assets/fonts/Urbanist-Black.ttf"),
        "Urbanist-ThinItalic": require("../assets/fonts/Urbanist-ThinItalic.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <View>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text style={styles.UrbanistThinItalic}>home</Text>
            <Text style={styles.UrbanistThinItalic}>home</Text>
            <Text style={styles.UrbanistBlack}>home</Text>
            <Text style={styles.UrbanistBlack}>home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    UrbanistBlack: {
        fontFamily: "Urbanist-Black",
        fontSize: 20,
    },
    UrbanistThinItalic: {
        fontFamily: "Urbanist-ThinItalic",
        fontSize: 15,
    },
});

export default home;
