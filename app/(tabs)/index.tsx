import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center ">
      <Text className="text-xl font-bold text-success ">
        Welcome to Nativewind!
      </Text>
      <Link href="/onBoarding" asChild>
        <Pressable className="mt-4 rounded bg-black p-4 active:opacity-80">
          <Text className="text-white font-semibold">
            go to onBoarding
          </Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="mt-4 rounded bg-black p-4 active:opacity-80">
          <Text className="text-white font-semibold">
            go to SignIn
          </Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="mt-4 rounded bg-black p-4 active:opacity-80">
          <Text className="text-white font-semibold">
            go to SignUp
          </Text>
        </Pressable>
      </Link>
      <Link href="/subscriptions/spotify" asChild>
        <Pressable className="mt-4 rounded bg-black p-4 active:opacity-80">
          <Text className="text-white font-semibold">
            go to spotify
          </Text>
        </Pressable>
      </Link>
      <Link href="/subscriptions/claude" asChild>
        <Pressable className="mt-4 rounded bg-black p-4 active:opacity-80">
          <Text className="text-white font-semibold">
            go to claude
          </Text>
        </Pressable>
      </Link>
    </View>
    </SafeAreaView>
  );
}