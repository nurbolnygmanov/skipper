import { Notification } from "@/stores/notifications/notification";
import { Button } from "../button";
import styles from "./notification-toast.module.scss";

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
    <div className={`${styles[type]} ${styles.container}`}>
      <p>{title}</p>
      {message && <p>{message}</p>}

      <Button variant="danger" onClick={() => onDismiss(id)}>
        x
      </Button>
    </div>
  );
}
