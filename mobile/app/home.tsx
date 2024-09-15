import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "@/contexts/ThemeContext";

const home = () => {
    const { primaryColor, secondaryColor, setPrimaryColor } = useTheme();
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
