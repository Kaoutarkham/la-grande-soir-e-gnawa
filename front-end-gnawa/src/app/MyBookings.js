import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useBookingStore from "../stores/bookingStore";
import colors from "../constants/colors";

export default function MyBookings() {
  const bookings = useBookingStore((state) => state.bookings);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes réservations</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.booking}>
            <Text style={styles.text}>Code: {item.code}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
  },
  booking: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  text: { fontSize: 16 },
});
