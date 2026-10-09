import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { colors } from "@/theme/colors";

const PRIMARY_SWATCHES = [
  { name: "LINGUA PURPLE", hex: colors.linguaPurple, bgClass: "bg-lingua-purple" },
  { name: "LINGUA DEEP PURPLE", hex: colors.linguaDeepPurple, bgClass: "bg-lingua-deep-purple" },
  { name: "LINGUA BLUE", hex: colors.linguaBlue, bgClass: "bg-lingua-blue" },
  { name: "LINGUA GREEN", hex: colors.linguaGreen, bgClass: "bg-lingua-green" },
];

const SEMANTIC_SWATCHES = [
  { name: "SUCCESS", hex: colors.success, bgClass: "bg-success" },
  { name: "WARNING", hex: colors.warning, bgClass: "bg-warning" },
  { name: "STREAK", hex: colors.streak, bgClass: "bg-streak" },
  { name: "ERROR", hex: colors.error, bgClass: "bg-error" },
  { name: "INFO", hex: colors.info, bgClass: "bg-info" },
];

const NEUTRAL_SWATCHES = [
  { name: "TEXT / PRIMARY", hex: colors.textPrimary, bgClass: "bg-text-primary", border: false },
  { name: "TEXT / SECONDARY", hex: colors.textSecondary, bgClass: "bg-text-secondary", border: false },
  { name: "BORDER", hex: colors.border, bgClass: "bg-border", border: false },
  { name: "SURFACE", hex: colors.surface, bgClass: "bg-surface", border: true },
  { name: "BACKGROUND", hex: colors.background, bgClass: "bg-background", border: true },
];

const TYPOGRAPHY_SCALE = [
  {
    level: "H1",
    purpose: "Page / Screen Title",
    size: "32px",
    weight: "Bold",
    lineHeight: "1.2",
    textClass: "typography__h1",
  },
  {
    level: "H2",
    purpose: "Section Title",
    size: "24px",
    weight: "SemiBold",
    lineHeight: "1.3",
    textClass: "typography__h2",
  },
  {
    level: "H3",
    purpose: "Card / Module Title",
    size: "20px",
    weight: "SemiBold",
    lineHeight: "1.3",
    textClass: "typography__h3",
  },
  {
    level: "H4",
    purpose: "Subheading",
    size: "16px",
    weight: "Medium",
    lineHeight: "1.4",
    textClass: "typography__h4",
  },
  {
    level: "Body Large",
    purpose: "Important content",
    size: "16px",
    weight: "Regular",
    lineHeight: "1.6",
    textClass: "typography__body-large",
  },
  {
    level: "Body Medium",
    purpose: "Body text",
    size: "14px",
    weight: "Regular",
    lineHeight: "1.6",
    textClass: "typography__body-medium",
  },
  {
    level: "Body Small",
    purpose: "Supporting text",
    size: "13px",
    weight: "Regular",
    lineHeight: "1.6",
    textClass: "typography__body-small",
  },
  {
    level: "Caption",
    purpose: "Labels, meta text",
    size: "11px",
    weight: "Regular",
    lineHeight: "1.4",
    textClass: "typography__caption",
  },
];

export default function DesignSystemScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Board Container */}
        <View className="gap-6">
          {/* BRAND CARD */}
          <View className="card bg-white p-6 shadow-sm">
            <Text className="font-poppins-bold text-xs uppercase tracking-widest text-lingua-purple">
              BRAND
            </Text>
            <View className="my-4 h-[1px] w-full bg-border" />

            <View className="flex-row items-center justify-start gap-4 py-2">
              <Image
                source={images.mascotLogo}
                className="h-20 w-20"
                resizeMode="contain"
              />
              <Text className="font-poppins-bold text-4xl text-text-primary">
                lingua
              </Text>
            </View>
          </View>

          {/* COLORS CARD */}
          <View className="card bg-white p-6 shadow-sm">
            <Text className="font-poppins-bold text-xs uppercase tracking-widest text-lingua-purple">
              COLORS
            </Text>
            <View className="my-4 h-[1px] w-full bg-border" />

            {/* PRIMARY COLORS */}
            <View className="mb-6">
              <Text className="mb-3 font-poppins-semibold text-xs tracking-wider text-text-secondary">
                PRIMARY
              </Text>
              <View className="flex-row flex-wrap gap-3">
                {PRIMARY_SWATCHES.map((swatch) => (
                  <View key={swatch.name} className="flex-1 min-w-[70px]">
                    <View
                      className={`h-16 w-full rounded-2xl ${swatch.bgClass}`}
                    />
                    <Text className="mt-2 font-poppins-semibold text-[10px] text-text-primary">
                      {swatch.name}
                    </Text>
                    <Text className="font-poppins-regular text-[10px] text-text-secondary">
                      {swatch.hex}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* SEMANTIC COLORS */}
            <View className="mb-6">
              <Text className="mb-3 font-poppins-semibold text-xs tracking-wider text-text-secondary">
                SEMANTIC
              </Text>
              <View className="flex-row flex-wrap gap-3">
                {SEMANTIC_SWATCHES.map((swatch) => (
                  <View key={swatch.name} className="flex-1 min-w-[56px]">
                    <View
                      className={`h-14 w-full rounded-2xl ${swatch.bgClass}`}
                    />
                    <Text className="mt-2 font-poppins-semibold text-[10px] text-text-primary">
                      {swatch.name}
                    </Text>
                    <Text className="font-poppins-regular text-[10px] text-text-secondary">
                      {swatch.hex}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* NEUTRAL COLORS */}
            <View>
              <Text className="mb-3 font-poppins-semibold text-xs tracking-wider text-text-secondary">
                NEUTRALS
              </Text>
              <View className="flex-row flex-wrap gap-3">
                {NEUTRAL_SWATCHES.map((swatch) => (
                  <View key={swatch.name} className="flex-1 min-w-[56px]">
                    <View
                      className={`h-14 w-full rounded-2xl ${swatch.bgClass} ${
                        swatch.border ? "border border-border" : ""
                      }`}
                    />
                    <Text className="mt-2 font-poppins-semibold text-[9px] text-text-primary">
                      {swatch.name}
                    </Text>
                    <Text className="font-poppins-regular text-[10px] text-text-secondary">
                      {swatch.hex}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* TYPOGRAPHY CARD */}
          <View className="card bg-white p-6 shadow-sm">
            <Text className="font-poppins-bold text-xs uppercase tracking-widest text-lingua-purple">
              TYPOGRAPHY
            </Text>
            <View className="my-4 h-[1px] w-full bg-border" />

            <Text className="mb-1 font-poppins-semibold text-xs tracking-wider text-text-secondary">
              FONT FAMILY
            </Text>
            <Text className="font-poppins-bold text-4xl text-text-primary">
              Poppins
            </Text>
            <Text className="mt-2 font-poppins-regular text-sm leading-relaxed text-text-secondary">
              Poppins is a modern, geometric sans-serif typeface that provides
              excellent readability and a friendly personality.
            </Text>

            <View className="my-6 h-[1px] w-full bg-border" />

            {/* Typography Scale Table */}
            <View className="gap-4">
              {TYPOGRAPHY_SCALE.map((item) => (
                <View
                  key={item.level}
                  className="flex-row items-center justify-between border-b border-border/50 pb-3"
                >
                  <View className="w-24">
                    <Text className={item.textClass}>{item.level}</Text>
                  </View>
                  <View className="flex-1 px-2">
                    <Text className="font-poppins-regular text-xs text-text-secondary">
                      {item.purpose}
                    </Text>
                  </View>
                  <View className="w-12 items-end">
                    <Text className="font-poppins-regular text-xs text-text-secondary">
                      {item.size}
                    </Text>
                  </View>
                  <View className="w-16 items-end">
                    <Text className="font-poppins-regular text-xs text-text-secondary">
                      {item.weight}
                    </Text>
                  </View>
                  <View className="w-10 items-end">
                    <Text className="font-poppins-regular text-xs text-text-secondary">
                      {item.lineHeight}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* UTILITIES SHOWCASE (Buttons, Badges, Cards) */}
          <View className="card bg-white p-6 shadow-sm">
            <Text className="font-poppins-bold text-xs uppercase tracking-widest text-lingua-purple">
              UI UTILITIES & COMPONENTS
            </Text>
            <View className="my-4 h-[1px] w-full bg-border" />

            {/* Buttons Showcase */}
            <Text className="mb-3 font-poppins-semibold text-xs tracking-wider text-text-secondary">
              BUTTON UTILITIES
            </Text>
            <View className="gap-3">
              <View className="btn btn--primary">
                <Text className="btn__text">START LEARNING</Text>
              </View>
              <View className="btn btn--success">
                <Text className="btn__text">CONTINUE LESSON</Text>
              </View>
              <View className="btn btn--secondary">
                <Text className="btn__text--secondary">PRACTICE WORDS</Text>
              </View>
            </View>

            {/* Badges Showcase */}
            <Text className="mb-3 mt-6 font-poppins-semibold text-xs tracking-wider text-text-secondary">
              BADGE UTILITIES
            </Text>
            <View className="flex-row flex-wrap gap-2">
              <View className="badge badge--streak">
                <Image
                  source={images.streakFire}
                  className="mr-1.5 h-4 w-4"
                  resizeMode="contain"
                />
                <Text className="font-poppins-semibold text-xs text-streak">
                  7 DAY STREAK
                </Text>
              </View>

              <View className="badge badge--success">
                <Text className="font-poppins-semibold text-xs text-success">
                  COMPLETED
                </Text>
              </View>

              <View className="badge badge--warning">
                <Text className="font-poppins-semibold text-xs text-warning">
                  IN PROGRESS
                </Text>
              </View>

              <View className="badge badge--info">
                <Text className="font-poppins-semibold text-xs text-info">
                  NEW LESSON
                </Text>
              </View>

              <View className="badge badge--error">
                <Text className="font-poppins-semibold text-xs text-error">
                  1 HEART LEFT
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
});
