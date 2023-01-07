import { FC } from "react";
import { useData } from "@/data/useData";
import { EventDay } from "@/features/event/EventDay/EventDay";

type EventPageProps = {};

export const EventPage: FC<EventPageProps> = () => {
  const { dayId, days, activeDay } = useData();

  if (!activeDay) return <div>Oooops :(</div>;

  return <EventDay day={activeDay} />;
};
