import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { AuthScreenLayout } from "@/components/auth-screen-layout";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  return (
    <AuthScreenLayout
      title="Create your account"
      subtitle="Start your language journey today ✨"
      primaryButtonText="Sign Up"
      onPrimaryButtonPress={() => setShowVerification(true)}
      onSocialAuthPress={(provider) => {
        console.log(`Continue with ${provider}`);
        setShowVerification(true);
      }}
      footerText="Already have an account? "
      footerLinkText="Log in"
      onFooterLinkPress={() => router.push("/(auth)/sign-in")}
      showVerification={showVerification}
      onCloseVerification={() => setShowVerification(false)}
      verificationEmail={email}
    >
      {/* Email Field */}
      <View className="rounded-[18px] border border-border bg-white px-4 py-2.5">
        <Text className="font-poppins-regular text-[12px] text-text-secondary">
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="alex@gmail.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          className="mt-0.5 p-0 font-poppins-medium text-[16px] text-text-primary"
        />
      </View>

      {/* Password Field */}
      <View className="mt-3 rounded-[18px] border border-border bg-white px-4 py-2.5">
        <Text className="font-poppins-regular text-[12px] text-text-secondary">
          Password
        </Text>
        <View className="flex-row items-center justify-between">
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            className="mt-0.5 flex-1 p-0 font-poppins-medium text-[16px] text-text-primary"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPassword(!showPassword)}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            className="pl-2"
          >
            <Image
              source={showPassword ? images.eyeOff : images.eye}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreenLayout>
  );
}
