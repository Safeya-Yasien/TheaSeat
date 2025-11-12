import MainLayout from "@layouts/MainLayout";
import Home from "@pages/Home";
import SeatSelection from "@pages/SeatSelection";
import OrderPage from "@pages/OrderPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "seats/:movieId",
        element: <SeatSelection />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
