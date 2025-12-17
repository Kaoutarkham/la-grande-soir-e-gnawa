import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchEvent = async () => {
  const res = await api.get("/event");
  return res.data;
};

export const fetchArtists = async () => {
  const res = await api.get("/artists");
  return res.data;
};

export const fetchArtistById = async (id) => {
  const res = await api.get(`/artists/${id}`);
  return res.data;
};

export const createBooking = async (bookingData) => {
  const res = await api.post("/bookings", bookingData);
  return res.data;
};

export const fetchBookingByCode = async (code) => {
  const res = await api.get(`/bookings/${code}`);
  return res.data;
};

export const fetchBookingsByEmail = async (email) => {
  const res = await api.get(`/bookings/email/${email}`);
  return res.data;
};
