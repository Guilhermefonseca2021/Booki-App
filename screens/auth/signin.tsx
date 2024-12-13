import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
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
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <View className="flex h-full min-h-screen flex-wrap items-center justify-center">
      <View className="bg-secondary p-8 m-4 rounded-xl text-white gap-4">
        <Text className="my-4 text-2xl font-bold text-white text-center">Login</Text>
      <View className="w-full ">
        <Text className="text-xl text-white">Name</Text>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="text-input"
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
              className="text-input"
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
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="text-input text-white"
              placeholder="Enter your password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text className="text-lg text-danger">{errors.password.message}</Text>
        )}
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          accessibilityLabel="Submit your form"
        />
      </View>
      </View>
    </View>
  );
}
