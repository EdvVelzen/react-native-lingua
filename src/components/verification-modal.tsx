import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
  onSuccess?: () => void;
}

export function VerificationModal({
  visible,
  onClose,
  email,
  onSuccess,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Reset state and focus keyboard when modal opens
  useEffect(() => {
    if (visible) {
      // Small delay to allow modal animation to settle before focusing
      const timer = setTimeout(() => {
        setCode("");
        setIsVerifying(false);
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleCodeChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, "").slice(0, 6);
    setCode(cleaned);

    // When the 6th digit is entered, automatically navigate to home route (/)
    if (cleaned.length === 6 && !isVerifying) {
      setIsVerifying(true);
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        } else {
          onClose();
          router.replace("/");
        }
      }, 300);
    }
  };

  const handleBoxPress = () => {
    inputRef.current?.focus();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        {/* Backdrop */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={StyleSheet.absoluteFill}
          className="bg-black/50"
        />

        {/* Modal Content Box */}
        <View
          className="relative w-full max-w-[360px] rounded-[28px] bg-white p-6"
          style={styles.modalCard}
        >
          {/* Close Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onClose}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            className="absolute right-5 top-5 h-8 w-8 items-center justify-center rounded-full bg-surface"
          >
            <View style={styles.closeX1} />
            <View style={styles.closeX2} />
          </TouchableOpacity>

          {/* Email Icon Header Badge */}
          <View className="mx-auto mb-4 h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F3FE]">
            {/* Envelope shape */}
            <View className="h-6 w-8 rounded-md border-2 border-lingua-purple">
              <View style={styles.mailFlap} />
            </View>
          </View>

          {/* Title & Copy */}
          <Text className="text-center font-poppins-bold text-[22px] text-text-primary">
            Verify your email
          </Text>
          <Text className="mt-2 text-center font-poppins-regular text-[14px] leading-5 text-text-secondary">
            {"We've sent a 6-digit verification code to"}{"\n"}
            <Text className="font-poppins-semibold text-text-primary">
              {email || "your email"}
            </Text>
            . Please enter the code below.
          </Text>

          {/* 6 Digit Input Boxes */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleBoxPress}
            className="mt-6 flex-row justify-center gap-2"
          >
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const digit = code[index] || "";
              const isCurrent = code.length === index;
              const isFilled = Boolean(digit);

              return (
                <View
                  key={index}
                  className={`h-14 w-11 items-center justify-center rounded-[14px] ${
                    isCurrent
                      ? "border-2 border-lingua-purple bg-[#F5F3FE]"
                      : isFilled
                      ? "border-2 border-lingua-purple bg-white"
                      : "border border-border bg-[#F9FAFB]"
                  }`}
                  style={styles.digitBoxShadow}
                >
                  <Text className="font-poppins-bold text-[22px] text-text-primary">
                    {digit}
                  </Text>
                </View>
              );
            })}
          </TouchableOpacity>

          {/* Hidden Text Input handling number pad */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            caretHidden
            autoFocus
          />

          {/* Resend Link */}
          <View className="mt-6 flex-row items-center justify-center">
            <Text className="font-poppins-regular text-[13px] text-text-secondary">
              {"Didn't receive the code? "}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setCode("");
                inputRef.current?.focus();
              }}
            >
              <Text className="font-poppins-semibold text-[13px] text-lingua-purple">
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalCard: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  digitBoxShadow: {
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0.01,
    bottom: 0,
  },
  closeX1: {
    position: "absolute",
    width: 12,
    height: 2,
    backgroundColor: "#6B7280",
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },
  closeX2: {
    position: "absolute",
    width: 12,
    height: 2,
    backgroundColor: "#6B7280",
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },
  mailFlap: {
    position: "absolute",
    top: 0,
    left: 4,
    width: 16,
    height: 8,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#6C4EF5",
    transform: [{ rotate: "45deg" }],
    borderRadius: 2,
  },
});
