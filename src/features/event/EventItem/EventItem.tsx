import { CSSProperties, FC, useMemo } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { formatISO } from "date-fns";
import { getEventDuration, getEventTime } from "@/data/data";
import { Event, OnlineMode } from "@/data/types";
import { useData } from "@/data/useData";
import { Icon } from "@/ui/Icon/Icon";
import styles from "./EventItem.module.scss";

type EventItemProps = {
  event: Event;
  date: string;
};

export const EventItem: FC<EventItemProps> = ({ event, date }) => {
  const { dayId, getRoomBeEvent } = useData();

  const eventTo = {
    search: `?${!dayId ? "" : `day=${dayId}&`}event=${event.slug}`,
  };

  const timeStart = getEventTime(date, event.timeStart);
  const timeEnd = getEventTime(date, event.timeEnd);
  const duration = getEventDuration(timeStart, timeEnd);
  const room = getRoomBeEvent(event);

  const roomStyle = !room?.color
    ? {}
    : ({
        "--custom-event-room-color": room.color,
      } as CSSProperties);

  const modeIcon = useMemo(() => {
    if (event.mode === OnlineMode.ONLINE) return "video_camera_front";
    if (event.mode === OnlineMode.OFFLINE) return "video_camera_front_off";
    if (event.mode === OnlineMode.PARTIAL) return "slow_motion_video";
  }, []);

  return (
    <section className={cn(styles.event, styles[event.type])} style={roomStyle}>
      <Link to={eventTo} className={styles.container}>
        <div className={styles.slot}>
          <div className={styles.wrapper}>
            <time
              className={styles.start}
              dateTime={timeStart ? formatISO(timeStart) : undefined}
            >
              {event.timeStart}
            </time>
            <time
              className={styles.end}
              dateTime={timeEnd ? formatISO(timeEnd) : undefined}
            >
              {event.timeEnd}
            </time>
            <span className={styles.duration}>{duration}</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            {event.title && <h2 className={styles.title}>{event.title}</h2>}
            {event.description && (
              <p className={styles.description}>{event.description}</p>
            )}
            {room && (
              <footer className={styles.footer}>
                <span className={styles.room}>
                  <Icon name="meeting_room" className={styles.roomIcon} />{" "}
                  {room?.name}
                </span>
              </footer>
            )}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <div className={styles.mode}>
              {modeIcon && (
                <Icon
                  name={modeIcon}
                  className={cn(
                    styles.modeIcon,
                    styles[event.mode || "unknown"]
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};
