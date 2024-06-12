import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { auth } from '../components/firebaseSettings';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-4xl font-bold text-[#0B646B] mb-5">Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        placeholderTextColor="#666"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        placeholderTextColor="#666"
      />
      <TouchableOpacity onPress={handleSignup} className="w-full p-4 bg-[#0B646B] rounded-lg items-center">
        <Text className="text-white text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} className="mt-5">
        <Text className="text-[#0B646B] text-lg">Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}
