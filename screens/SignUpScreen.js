import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { auth } from '../components/firebaseSettings';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State variable to manage loading state

  const handleSignup = async () => {
    setLoading(true); // Set loading to true when sign up button is clicked
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading back to false after sign up attempt is completed
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
      <TouchableOpacity
        onPress={handleSignup}
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
          <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} className="mt-5">
        <Text className="text-[#0B646B] text-lg">Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}
