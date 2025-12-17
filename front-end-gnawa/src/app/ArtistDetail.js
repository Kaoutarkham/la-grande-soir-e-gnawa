import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchArtistById } from "../services/api";
import colors from "../constants/colors";

export default function ArtistDetail({ route, navigation }) {
  const { id } = route.params;
  const { data, isLoading, error } = useQuery(["artist", id], () =>
    fetchArtistById(id)
  );

  if (isLoading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error loading artist</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: data.photo }} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.style}>{data.style}</Text>
      <Text style={styles.bio}>{data.bio}</Text>
      <Button
        title="Réserver un billet"
        color={colors.primary}
        onPress={() =>
          navigation.navigate("BookingForm", {
            artistId: id,
            artistName: data.name,
          })
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  style: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 15,
  },
  bio: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 20,
    textAlign: "center",
  },
  loading: { marginTop: 50, textAlign: "center", fontSize: 18 },
  error: { marginTop: 50, textAlign: "center", fontSize: 18, color: "red" },
});
