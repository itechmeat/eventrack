import { useSearchParams } from "react-router-dom";
import { getDays } from "@/data/data";

export const useData = () => {
  const [searchParams] = useSearchParams();
  const dayId = searchParams.get("day");
  const days = getDays(dayId);
  const activeDay = days?.find((day) => day.active);

  return {
    dayId,
    days,
    activeDay,
  };
};
