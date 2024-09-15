import { ThemeProvider } from "@/contexts/ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
    initialRouteName: "home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        "Urbanist-Black": require("../assets/fonts/Urbanist-Black.ttf"),
        "Urbanist-BlackItalic": require("../assets/fonts/Urbanist-BlackItalic.ttf"),
        "Urbanist-Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
        "Urbanist-BoldItalic": require("../assets/fonts/Urbanist-BoldItalic.ttf"),
        "Urbanist-ExtraBold": require("../assets/fonts/Urbanist-ExtraBold.ttf"),
        "Urbanist-ExtraBoldItalic": require("../assets/fonts/Urbanist-ExtraBoldItalic.ttf"),
        "Urbanist-ExtraLight": require("../assets/fonts/Urbanist-ExtraLight.ttf"),
        "Urbanist-ExtraLightItalic": require("../assets/fonts/Urbanist-ExtraLightItalic.ttf"),
        "Urbanist-Italic": require("../assets/fonts/Urbanist-Italic.ttf"),
        "Urbanist-Light": require("../assets/fonts/Urbanist-Light.ttf"),
        "Urbanist-LightItalic": require("../assets/fonts/Urbanist-LightItalic.ttf"),
        "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
        "Urbanist-MediumItalic": require("../assets/fonts/Urbanist-MediumItalic.ttf"),
        "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
        "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
        "Urbanist-SemiBoldItalic": require("../assets/fonts/Urbanist-SemiBoldItalic.ttf"),
        "Urbanist-Thin": require("../assets/fonts/Urbanist-Thin.ttf"),
        "Urbanist-ThinItalic": require("../assets/fonts/Urbanist-ThinItalic.ttf"),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="home" />
                    <Stack.Screen name="newNote" />
                    {/* <Stack.Screen name="(tabs)" /> */}
                </Stack>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}
