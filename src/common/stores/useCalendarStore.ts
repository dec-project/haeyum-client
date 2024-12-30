import { create } from 'zustand';

type CalendarStoreType = {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
};

export const useCalendarStore = create<CalendarStoreType>((set) => ({
  startDate: new Date(),
  endDate: new Date(),
  setStartDate: (date: Date | null) => set({ startDate: date }),
  setEndDate: (date: Date | null) => set({ endDate: date }),
}));
