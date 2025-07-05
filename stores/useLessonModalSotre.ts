// store/useLessonModalStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Performance = "Excellent" | "Average" | "Poor" | "Absent" | "";

interface LessonModalState {
  isModalOpen: boolean;
  notes: string;
  performance: Performance;
  openModal: () => void;
  closeModal: () => void;
  setNotes: (notes: string) => void;
  setPerformance: (p: Performance) => void;
  resetForm: () => void;
}

export const useLessonModalStore = create<LessonModalState>()(
  persist(
    (set) => ({
      isModalOpen: false,
      notes: "",
      performance: "",
      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),
      setNotes: (notes) => set({ notes }),
      setPerformance: (performance) => set({ performance }),
      resetForm: () =>
        set({
          notes: "",
          performance: "",
          isModalOpen: false,
        }),
    }),
    {
      name: "lesson-modal-storage", // localStorage key
    }
  )
);
