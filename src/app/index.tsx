import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { images } from "@/constants/images";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 justify-between px-6 py-6">
        {/* Simple Brand Content */}
        <View className="flex-1 items-center justify-center px-4">
          <Image
            source={images.mascotLogo}
            className="h-28 w-28"
            resizeMode="contain"
          />
          <Text className="mt-5 text-center font-poppins-bold text-[34px] text-text-primary">
            lingua
          </Text>
          <Text className="mt-2 text-center font-poppins-regular text-base leading-6 text-text-secondary">
            The free, fun, and effective way to learn a language!
          </Text>
        </View>

        {/* Bottom Navigation Link to Onboarding */}
        <View className="pb-4">
          <Link href="/(auth)/onboarding" asChild>
            <TouchableOpacity
              activeOpacity={0.85}
              className="relative h-14 w-full flex-row items-center justify-center rounded-[18px] bg-lingua-purple"
              style={styles.buttonShadow}
            >
              <Text className="font-poppins-semibold text-[17px] text-white">
                Get Started
              </Text>
              <View style={styles.chevron} />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  buttonShadow: {
    shadowColor: "#5B3BF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  chevron: {
    position: "absolute",
    right: 24,
    width: 9,
    height: 9,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
  },
});
