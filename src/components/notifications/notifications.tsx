import { useNotifications } from "@/stores/notifications/notification";
import { NotificationToast } from "./notification-toast";

export function Notifications() {
  const { notifications, dismissNotification } = useNotifications();

  if (notifications.length < 1) return null;

  return (
    <div style={{ position: "absolute", right: "1rem", bottom: "1rem" }}>
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
}
