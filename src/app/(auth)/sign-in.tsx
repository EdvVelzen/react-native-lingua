import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { AuthScreenLayout } from "@/components/auth-screen-layout";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  return (
    <AuthScreenLayout
      title="Welcome back"
      subtitle="Continue your language journey today ✨"
      primaryButtonText="Sign In"
      onPrimaryButtonPress={() => setShowVerification(true)}
      onSocialAuthPress={(provider) => {
        console.log(`Continue with ${provider}`);
        setShowVerification(true);
      }}
      footerText={"Don't have an account? "}
      footerLinkText="Sign up"
      onFooterLinkPress={() => router.push("/(auth)/sign-up")}
      showVerification={showVerification}
      onCloseVerification={() => setShowVerification(false)}
      verificationEmail={email}
    >
      {/* Email Field (Passwordless Email Auth) */}
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
    </AuthScreenLayout>
  );
}
