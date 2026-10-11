import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/(auth)/sign-up");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Top Header & Hero Copy */}
        <View>
          {/* Top Header: Mascot Logo & App Name */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/");
              }
            }}
            className="flex-row items-center justify-center gap-2.5 pt-3 pb-2"
          >
            <Image
              source={images.mascotLogo}
              className="h-10 w-10"
              resizeMode="contain"
            />
            <Text className="font-poppins-bold text-[32px] text-text-primary">
              lingua
            </Text>
          </TouchableOpacity>

          {/* Hero Headline & Subtitle */}
          <View className="mt-8 px-7">
            <Text className="font-poppins-bold text-[34px] leading-[42px] tracking-tight text-text-primary">
              Your AI language{"\n"}
              <Text className="text-lingua-purple">teacher.</Text>
            </Text>
            <Text className="mt-3 font-poppins-regular text-[15px] leading-[24px] text-text-secondary">
              Real conversations, personalized{"\n"}
              lessons, anytime, anywhere.
            </Text>
          </View>
        </View>

        {/* Central Illustration Area with Mascot & Speech Bubbles */}
        <View className="my-auto items-center justify-center py-6">
          <View className="relative h-[310px] w-full max-w-[340px] items-center justify-center">
            {/* Top-Left Speech Bubble: "Hello!" */}
            <View className="absolute left-2 top-3 z-10">
              <View className="rounded-2xl bg-[#EFF6FD] px-4 py-2.5">
                <Text className="font-poppins-semibold text-base text-text-primary">
                  Hello!
                </Text>
              </View>
              {/* Tail pointing down-right toward fox ear */}
              <View style={styles.helloTail} />
            </View>

            {/* Top-Right Speech Bubble: "¡Hola!" */}
            <View className="absolute right-4 top-0 z-10">
              <View className="rounded-2xl bg-[#F5F3FE] px-4 py-2.5">
                <Text className="font-poppins-semibold text-base text-lingua-purple">
                  ¡Hola!
                </Text>
              </View>
              {/* Tail pointing down-left toward fox waving hand */}
              <View style={styles.holaTail} />
            </View>

            {/* Mid-Right Speech Bubble: "你好!" */}
            <View className="absolute right-1 top-24 z-10">
              <View className="rounded-2xl bg-[#FCF3EE] px-4 py-2.5">
                <Text className="font-poppins-semibold text-base text-[#FF4D4F]">
                  你好!
                </Text>
              </View>
              {/* Tail pointing left toward fox waving hand */}
              <View style={styles.nihaoTail} />
            </View>

            {/* Fox Mascot */}
            <Image
              source={images.mascotWelcome}
              className="h-64 w-64"
              resizeMode="contain"
            />

            {/* Ground Shadow */}
            <View className="-mt-2 h-3 w-40 rounded-full bg-[#0D132B]/[0.06]" />
          </View>
        </View>

        {/* Bottom Action: "Get Started" Button */}
        <View className="px-6 pb-6 pt-2">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleGetStarted}
            className="relative h-14 w-full flex-row items-center justify-center rounded-[18px] bg-lingua-purple"
            style={styles.buttonShadow}
          >
            <Text className="font-poppins-semibold text-[17px] text-white">
              Get Started
            </Text>
            <View style={styles.chevron} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  helloTail: {
    position: "absolute",
    bottom: -7,
    right: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#EFF6FD",
  },
  holaTail: {
    position: "absolute",
    bottom: -7,
    left: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#F5F3FE",
  },
  nihaoTail: {
    position: "absolute",
    top: 14,
    left: -7,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 8,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#FCF3EE",
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
