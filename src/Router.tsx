import { FC } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "@/features/layout/MainLayout/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { EventPage } from "@/pages/EventPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="event" element={<EventPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
