import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { auth } from '../components/firebaseSettings';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State variable to manage loading state

  const handleLogin = async () => {
    setLoading(true); // Set loading to true when login button is clicked
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading back to false after login attempt is completed
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
      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading} // Disable button when loading is true
        style={{ 
          backgroundColor: loading ? '#999' : '#0B646B', // Change button color when loading
          opacity: loading ? 0.5 : 1, // Reduce opacity when loading
          borderRadius: 8,
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {loading ? ( // Render activity indicator when loading is true
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} className="mt-5">
        <Text className="text-[#0B646B] text-lg">Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
