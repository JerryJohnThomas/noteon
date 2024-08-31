import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

const NewNote = () => {
  const [note, setNote] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Start typing your note here..."
              value={note}
              onChangeText={setNote}
              autoFocus
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.controlBar}>
          <TouchableOpacity style={styles.controlButton}>
            {/* <Ionicons name="bold" size={24} color="white" /> */}
            <FontAwesome6 name="bold" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            {/* <Ionicons name="italic" size={24} color="white" /> */}
            <Octicons name="italic" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>T1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>T2</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Link href="/home" style={styles.homeButton}>Home</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  homeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#2f95dc',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  controlBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    justifyContent: 'space-around',
  },
  controlButton: {
    padding: 5,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewNote;
