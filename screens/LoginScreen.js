import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { auth } from '../components/firebaseSettings';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (

      <View className="flex-1 justify-center items-center p-5 bg-white">
        <Text className="text-4xl font-bold text-[#0B646B] mb-5">Login</Text>
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
        <TouchableOpacity onPress={handleLogin} className="w-full p-4 bg-[#0B646B] rounded-lg items-center">
          <Text className="text-white text-lg font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} className="mt-5">
          <Text className="text-[#0B646B] text-lg">Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
  );
}
