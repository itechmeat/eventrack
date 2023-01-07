import { useSearchParams } from "react-router-dom";
import { DataType, getData, getDays } from "@/data/data";
import { Event, Room } from "@/data/types";

export const useData = () => {
  const [searchParams] = useSearchParams();
  const dayId = searchParams.get("day");
  const days = getDays(dayId);
  const activeDay = days?.find((day) => day.active);
  const rooms = getData("rooms", DataType.ARRAY) as Room[];
  const getRoomBeEvent = (event: Event) => {
    return rooms.find((room) => room.slug === event.roomSlug);
  };

  return {
    dayId,
    days,
    activeDay,
    rooms,
    getRoomBeEvent,
  };
};
