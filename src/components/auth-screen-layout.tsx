import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { VerificationModal } from "@/components/verification-modal";

interface AuthScreenLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  primaryButtonText: string;
  onPrimaryButtonPress: () => void;
  onSocialAuthPress?: (provider: "Google" | "Facebook" | "Apple") => void;
  footerText: string;
  footerLinkText: string;
  onFooterLinkPress: () => void;
  showVerification: boolean;
  onCloseVerification: () => void;
  verificationEmail: string;
}

export function AuthScreenLayout({
  title,
  subtitle,
  children,
  primaryButtonText,
  onPrimaryButtonPress,
  onSocialAuthPress,
  footerText,
  footerLinkText,
  onFooterLinkPress,
  showVerification,
  onCloseVerification,
  verificationEmail,
}: AuthScreenLayoutProps) {
  const router = useRouter();

  const handleSocialAuth = (provider: "Google" | "Facebook" | "Apple") => {
    if (onSocialAuthPress) {
      onSocialAuthPress(provider);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <View className="flex-1 px-6 pt-2 pb-6">
          {/* Top Back Chevron */}
          <View className="flex-row items-center">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (router.canGoBack()) {
                  router.back();
                } else {
                  router.replace("/onboarding");
                }
              }}
              hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
              className="-ml-2 h-10 w-10 items-center justify-center"
            >
              <View style={styles.backChevron} />
            </TouchableOpacity>
          </View>

          {/* Title & Subtitle */}
          <View className="mt-3">
            <Text className="font-poppins-bold text-[28px] text-text-primary">
              {title}
            </Text>
            <Text className="mt-1 font-poppins-regular text-[15px] text-text-secondary">
              {subtitle}
            </Text>
          </View>

          {/* Mascot Illustration with Sparkles */}
          <View className="relative -mb-1 mt-3 items-center justify-center">
            {/* Sparkle top-left */}
            <View className="absolute left-[24%] top-4 z-10">
              <Image
                source={images.sparkleYellow}
                className="h-4 w-4"
                resizeMode="contain"
              />
            </View>

            {/* Sparkle top-right */}
            <View className="absolute right-[22%] top-6 z-10">
              <Image
                source={images.sparkleBlue}
                className="h-4 w-4"
                resizeMode="contain"
              />
            </View>

            {/* Sparkle mid-right */}
            <View className="absolute right-[26%] top-16 z-10">
              <Image
                source={images.sparkleYellow}
                className="h-3.5 w-3.5"
                resizeMode="contain"
              />
            </View>

            {/* Fox Mascot */}
            <Image
              source={images.mascotAuth}
              className="h-36 w-44"
              resizeMode="contain"
            />
          </View>

          {/* Form Inputs & Main Button */}
          <View className="z-20">
            {children}

            {/* Main Action Button */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={onPrimaryButtonPress}
              className="mt-5 h-14 w-full flex-row items-center justify-center rounded-[18px] bg-lingua-purple"
              style={styles.buttonShadow}
            >
              <Text className="font-poppins-semibold text-[17px] text-white">
                {primaryButtonText}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="my-5 flex-row items-center justify-center">
            <View className="h-[1px] flex-1 bg-border" />
            <Text className="px-3 font-poppins-regular text-[13px] text-text-secondary">
              or continue with
            </Text>
            <View className="h-[1px] flex-1 bg-border" />
          </View>

          {/* Social Auth Buttons */}
          <View className="gap-3">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleSocialAuth("Google")}
              className="h-14 w-full flex-row items-center justify-center rounded-[18px] border border-border bg-white px-4"
            >
              <Image
                source={images.google}
                className="mr-3 h-5 w-5"
                resizeMode="contain"
              />
              <Text className="font-poppins-medium text-[15px] text-text-primary">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleSocialAuth("Facebook")}
              className="h-14 w-full flex-row items-center justify-center rounded-[18px] border border-border bg-white px-4"
            >
              <Image
                source={images.facebook}
                className="mr-3 h-5 w-5"
                resizeMode="contain"
              />
              <Text className="font-poppins-medium text-[15px] text-text-primary">
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleSocialAuth("Apple")}
              className="h-14 w-full flex-row items-center justify-center rounded-[18px] border border-border bg-white px-4"
            >
              <Image
                source={images.apple}
                className="mr-3 h-5 w-5"
                resizeMode="contain"
              />
              <Text className="font-poppins-medium text-[15px] text-text-primary">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Footer Link */}
          <View className="mt-7 flex-row items-center justify-center">
            <Text className="font-poppins-regular text-[14px] text-text-secondary">
              {footerText}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onFooterLinkPress}
            >
              <Text className="font-poppins-semibold text-[14px] text-lingua-purple">
                {footerLinkText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Verification Modal */}
      <VerificationModal
        visible={showVerification}
        onClose={onCloseVerification}
        email={verificationEmail || "alex@gmail.com"}
      />
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
  },
  backChevron: {
    width: 11,
    height: 11,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: "#0D132B",
    transform: [{ rotate: "45deg" }],
  },
  buttonShadow: {
    shadowColor: "#5B3BF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
});
