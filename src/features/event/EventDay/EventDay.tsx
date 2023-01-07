import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Day } from "@/data/types";
import { getEventsByDayId } from "@/data/data";
import { EventItem } from "@/features/event/EventItem/EventItem";
import styles from "./EventDay.module.scss";

type EventDayProps = {
  day: Day;
};

export const EventDay: FC<EventDayProps> = ({ day }) => {
  const events = getEventsByDayId(day.slug);

  return (
    <article className={styles.day}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {format(parseISO(day.date), "EEEE, MMMM d")}
        </h1>
      </header>
      {events.map((event) => (
        <EventItem event={event} date={day.date} key={event.slug} />
      ))}
    </article>
  );
};
