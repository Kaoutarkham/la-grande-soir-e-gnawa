import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchArtists } from "../services/api";
import ArtistCard from "../components/ArtistCard";

export default function ArtistsList({ navigation }) {
  const { data, isLoading, error } = useQuery("artists", fetchArtists);

  if (isLoading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error loading artists</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ArtistCard
            artist={item}
            onPress={() => navigation.navigate("ArtistDetail", { id: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  loading: { marginTop: 50, textAlign: "center", fontSize: 18 },
  error: { marginTop: 50, textAlign: "center", fontSize: 18, color: "red" },
});
