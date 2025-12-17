import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { createBooking } from "../services/api";
import useBookingStore from "../stores/bookingStore";
import colors from "../constants/colors";
import { useRouter } from "expo-router";

export default function BookingForm({ route }) {
  const router = useRouter();
  const { artistId, artistName } = route.params;
  const [email, setEmail] = useState("");
  const addBooking = useBookingStore((state) => state.addBooking);

  const handleBooking = async () => {
    if (!email) return Alert.alert("Erreur", "Veuillez entrer votre email");
    try {
      const booking = await createBooking({ email, artist_id: artistId });
      addBooking(booking);
      Alert.alert("Succès", `Réservation confirmée! Code: ${booking.code}`);
      router.push("/MyBookings");
    } catch (err) {
      Alert.alert("Erreur", "Impossible de créer la réservation");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réserver pour {artistName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Votre email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Réserver" color={colors.primary} onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.white,
  },
});
