import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Definindo o tipo das rotas
type RootStackParamList = {
  Signin: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  confirmPassword: z.string().min(8, { message: '' }),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',

    },
  });

  const navigation = useNavigation<NavigationProp>();

  const handleSignInPress = () => {
    navigation.navigate('Signin');
  };

  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    handleLoginPress();
  };

  return (
    <View className="flex h-full min-h-screen flex-wrap items-center justify-center bg-foreshadow">
      <View className="m-4 gap-6 rounded-xl bg-secondary p-8 text-white">
        <Text className="my-4 text-center text-2xl font-bold text-white">Login</Text>
        <View className="w-full">
          <Text className="text-xl text-white">Name</Text>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="text-input bg-white"
                placeholder="Enter your name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && <Text className="text-lg text-danger">{errors.name.message}</Text>}
        </View>
        <View className="w-full">
          <Text className="text-xl text-white">Email</Text>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="text-input bg-white"
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <Text className="text-lg text-danger">{errors.email.message}</Text>}
        </View>
        <View className="w-full">
          <Text className="text-xl text-white">Password</Text>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="text-input bg-white"
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && <Text className="text-lg text-danger">{errors.password.message}</Text>}
        </View>
        <View className="w-full">
          <Text className="text-xl text-white">Confirm Password</Text>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="text-input bg-white text-secondary"
                placeholder="Enter your password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.confirmPassword && (
            <Text className="text-lg text-danger">{errors.confirmPassword?.message}</Text>
          )}
          <View className="mt-8">
            <Button
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              accessibilityLabel="Submit your form"
            />
          </View>
          <Text className="center text-center text-lg text-white">
            Have account?
            <TouchableOpacity onPress={handleSignInPress}>
              <Text className="text-blue"> Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}
