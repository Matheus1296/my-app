import { s } from "./style";
import { ActivityIndicator } from "react-native";
import { colors } from "@/styles/colors";

export default function Loading() {
  return (
    <ActivityIndicator size="large" color={colors.green.base}
      style={s.container}
    />
  )
}