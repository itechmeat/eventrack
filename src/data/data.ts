import { Day, DayWithActive, Event } from "./types";
import { intervalToDuration, parseISO } from "date-fns";
import data from "@/data/data.json";
import custom from "@/data/custom.json";

export enum DataType {
  STRING = "string",
  OBJECT = "object",
  ARRAY = "array",
}

export const getData = (request: string, type?: DataType): any => {
  // @ts-ignore
  const dataResult = request.split(".").reduce((o, i) => o[i], data);
  // @ts-ignore
  const customResult = request.split(".").reduce((o, i) => o[i], custom);
  const result = customResult || dataResult;
  if (type && typeof result === DataType.STRING) {
    return result;
  }
  if (type && type === DataType.OBJECT && typeof result === "object") {
    return result;
  }
  if (
    type &&
    type === DataType.ARRAY &&
    typeof result === "object" &&
    Array.isArray(result)
  ) {
    return result;
  }
  return;
};

export const getDays = (dayId?: string | null): DayWithActive[] => {
  const days = getData("days", DataType.ARRAY) as Day[];
  if (!days.length) return [];
  return days.map((day) => ({
    ...day,
    active: day.id === dayId,
  }));
};

export const getEventsByDayId = (dayId: string): Event[] => {
  const allEvents = getData("events", DataType.ARRAY) as Event[];
  return allEvents.filter((event) => event.day === dayId);
};

export const getEventTime = (date: string, time: string): Date | undefined => {
  if (!time) return;
  return parseISO(date + "T" + time);
};

export const getEventDuration = (
  start?: Date,
  end?: Date
): string | undefined => {
  if (!start || !end) return;
  const interval = intervalToDuration({
    start,
    end,
  });
  let result: string[] = [];
  if (interval.hours) {
    result.push(`${interval.hours}h`);
  }
  if (interval.minutes) {
    result.push(`${interval.minutes}m`);
  }
  return result.join(" ");
};
