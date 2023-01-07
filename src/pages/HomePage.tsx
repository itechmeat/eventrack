import { FC } from "react";
import { useData } from "@/data/useData";
import { HomeHero } from "@/features/landing/HomeHero/HomeHero";
import { EventDay } from "@/features/event/EventDay/EventDay";

type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  const { activeDay } = useData();

  if (activeDay) return <EventDay day={activeDay} />;

  return <HomeHero />;
};
