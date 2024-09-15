import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext"; // Adjust the path as needed
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Import Ionicons from @expo/vector-icons
import fetchNotes from "@/utils/fetchNotes";
import HomeNoteItem from "@/Components/HomeNoteItem";

const { width, height } = Dimensions.get("window"); // Get the screen dimensions
const COMMON_H_PADDING = 30;
// {backgroundColor:debugBackground}

const Home = () => {
    const { primaryColor, secondaryColor, tertiaryColor, background, debugBackground } = useTheme();
    const [query, setQuery] = useState(""); // Initialize state for search query
    const [notes, setNotes] = useState([]); // State to store fetched notes

    useEffect(() => {
        const loadNotes = async () => {
            const fetchedNotes = await fetchNotes();
            setNotes(fetchedNotes);
        };
        loadNotes();
    }, []);

    const handleClear = () => {
        setQuery("");
    };

    const handleSearch = () => {
        // IMPLEMENT NOTE SORT LOGIC Here
    };

    const handleSettings = () => {
        // IMPLEMENT Settings LOGIC Here
    };


    return (
        <SafeAreaView edges={["top", "right", "left"]} style={[styles.safeArea, { backgroundColor: background }]}>
            <View style={[styles.headerContainer, styles.commonHortizontalPadder]}>
                <Text style={[styles.headerText, { color: primaryColor }]}>noteon</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleSettings()}>
                        <Ionicons name="settings-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.searchContainer, styles.commonHortizontalPadder]}>
                <TextInput
                    style={[styles.searchBar, { borderColor: primaryColor }]}
                    placeholder="search"
                    placeholderTextColor={secondaryColor}
                    value={query}
                    onChangeText={setQuery}
                ></TextInput>
                <View style={[styles.searchIconContainer, query.length > 0 ? { right: COMMON_H_PADDING * 2.5 } : { right: COMMON_H_PADDING * 1.5 }]}>
                    <TouchableOpacity onPress={() => handleSearch()}>
                        <Ionicons name="search-outline" size={24} color={secondaryColor} />
                    </TouchableOpacity>
                </View>
                {query.length > 0 ? (
                    <View style={styles.searchIconContainer}>
                        <TouchableOpacity onPress={() => handleClear()}>
                            <MaterialIcons name="clear" size={24} color={secondaryColor} />
                        </TouchableOpacity>
                    </View>
                ) : null}
            </View>

            <View style={styles.bodyContainer}>
                {notes.map((note, index) => (
                    <HomeNoteItem
                        key={index} // Use the index or unique id as a key
                        title={note.title}
                        body={note.body}
                        date={note.date}
                        createdBy={note.createdBy}
                        createdDate={note.createdDate}
                        updatedBy={note.updatedBy}
                        updatedDate={note.updatedDate}
                    />
                ))}

                <Text style={[styles.bodyText, { color: tertiaryColor }]}>Body</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
                <Text style={[styles.bodyText, { color: tertiaryColor }]}>home</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        fontFamily: "Urbanist-Regular",
    },
    commonHortizontalPadder: {
        paddingHorizontal: COMMON_H_PADDING,
    },
    headerContainer: {
        height: 0.05 * height, // 10% of screen height
        marginBottom: 0.02 * height, // 10% of screen height
        flexDirection: "row",
        alignItems: "center", // Vertically center children
        justifyContent: "space-between", // Distribute space between text and icon
    },
    headerText: {
        fontFamily: "Urbanist-Regular", // Assuming 'Urbanist-Regular' is defined in your fonts
        fontSize: 32,
    },
    iconContainer: {
        justifyContent: "center", // Center the icon vertically within its container
        textAlignVertical: "bottom",
        // marginTop: 8,
        transform: [{ translateY: 4 }], // Adjust vertical alignment
    },
    bodyContainer: {
        flex: 1,
        alignItems: "center", // Center all text horizontally
        justifyContent: "center", // Center all text vertically
        padding: 20,
    },
    bodyText: {
        fontFamily: "Urbanist-ThinItalic", // Assuming 'Urbanist-ThinItalic' is defined in your fonts
        fontSize: 15,
        marginVertical: 5, // Add vertical spacing between text items
    },
    searchContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    searchBar: {
        // width: 0.9*width,
        width: "100%",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: COMMON_H_PADDING * 2.5,
        flexDirection: "row",
        alignItems: "center",
        // paddingRight: 40,
        fontSize: 17,
    },
    searchIconContainer: {
        position: "absolute",
        right: COMMON_H_PADDING * 1.5,
        top: "50%", // Center vertically
        transform: [{ translateY: -12 }], // Adjust vertical alignment
    },
});

export default Home;
