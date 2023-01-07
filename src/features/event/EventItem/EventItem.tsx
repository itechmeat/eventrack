import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { getEventDuration, getEventTime } from "@/data/data";
import { Event } from "@/data/types";
import { useData } from "@/data/useData";
import styles from "./EventItem.module.scss";

type EventItemProps = {
  event: Event;
  date: string;
};

export const EventItem: FC<EventItemProps> = ({ event, date }) => {
  const { dayId } = useData();

  const eventTo = {
    search: `?${!dayId ? "" : `day=${dayId}&`}event=${event.slug}`,
  };

  const duration = getEventDuration(
    getEventTime(date, event.timeStart),
    getEventTime(date, event.timeEnd)
  );

  return (
    <section className={styles.event}>
      <Link to={eventTo} className={styles.container}>
        <div className={styles.slot}>
          <span className={styles.start}>{event.timeStart}</span>
          <span className={styles.end}>{event.timeEnd}</span>
          <span className={styles.duration}>{duration}</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{event.title}</h2>
          <p className={styles.description}>{event.description}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.mode}>{event.mode}</div>
        </div>
      </Link>
    </section>
  );
};
