import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function BookingItem({ booking }) {
  return (
    <View style={styles.card}>
      <Text style={styles.email}>{booking.email}</Text>
      <Text style={styles.artist}>{booking.Artist.name}</Text>
      <Text style={styles.code}>Code: {booking.code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  email: { fontSize: 16, fontWeight: "bold", color: colors.primary },
  artist: { fontSize: 14, color: colors.gray, marginTop: 5 },
  code: { fontSize: 14, color: colors.text, marginTop: 5 },
});
