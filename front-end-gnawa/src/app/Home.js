import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchEvent } from "../services/api";
import colors from "../constants/colors";

export default function Home() {
  const { data, isLoading, error } = useQuery("event", fetchEvent);

  if (isLoading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error loading event</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: data.banner_image }} style={styles.banner} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.info}>
        {data.date} - {data.location}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: colors.gray,
  },
  loading: { marginTop: 50, textAlign: "center", fontSize: 18 },
  error: { marginTop: 50, textAlign: "center", fontSize: 18, color: "red" },
});
