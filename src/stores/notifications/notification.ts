import { createStore, useStore } from "zustand";
import { uid } from "@/utils/uid";

export type NotificationType = "info" | "warning" | "success" | "error";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
};

export type NotificationStore = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const notificationsStore = createStore<NotificationStore>(
  (set, get) => ({
    notifications: [],
    showNotification: (notification) => {
      const id = uid();

      set((state) => ({
        notifications: [...state.notifications, { id, ...notification }],
      }));
    },
    dismissNotification: (id) => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    },
  })
);

export function useNotifications() {
  return useStore(notificationsStore);
}
