import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBookingStore = create((set) => ({
  bookings: [],
  setBookings: (bookings) => {
    set({ bookings });
    AsyncStorage.setItem("bookings", JSON.stringify(bookings));
  },
  addBooking: (booking) =>
    set((state) => {
      const updated = [...state.bookings, booking];
      AsyncStorage.setItem("bookings", JSON.stringify(updated));
      return { bookings: updated };
    }),
  loadBookings: async () => {
    const stored = await AsyncStorage.getItem("bookings");
    if (stored) set({ bookings: JSON.parse(stored) });
  },
}));

export default useBookingStore;
