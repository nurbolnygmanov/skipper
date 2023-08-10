import { Notification } from "@/stores/notifications/notification";
import { Button } from "../button";

type NotificationProps = {
  notification: Notification;
  onDismiss: (id: string) => void;
};

export function NotificationToast({
  notification,
  onDismiss,
}: NotificationProps) {
  const { id, title, type, message } = notification;

  return (
    <div
      style={{
        display: "flex",
        height: "30px",
        gap: "1rem",
        border: "1px solid #00cc00",
        backgroundColor: "white",
        color: "#00cc00",
        padding: "0.5rem",
        alignItems: "center",
        borderRadius: "3px",
      }}
    >
      <p>{title}</p>
      {message && <p>{message}</p>}

      <Button variant="danger" onClick={() => onDismiss(id)}>
        x
      </Button>
    </div>
  );
}
