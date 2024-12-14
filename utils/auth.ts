import { auth } from './firebase';
import { FieldValues } from "react-hook-form";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

type RootStackParamList = {
    Signin: undefined;
    Home: undefined;
};
  
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const navigation = useNavigation<NavigationProp>();

export function handleSignup(values: FieldValues, actions: any) {
    if (values.password !== values.confirmPassword) {
        actions.setFieldError('confirmPassword', "Passwords don't match");
        return;
    }
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
        console.log('Signed up:', userCredential.user);
        navigation.navigate('Home');
    })
    .catch((error) => {
        Alert.alert('Signup Failed', error.message);
    });
};