import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("./components/AppLayout")).default,
      }),
      children: [
        {
          index: true,
          lazy: async () => ({
            Component: (await import("./pages/dashboard")).default,
          }),
        },
        {
          path: "music",
          lazy: async () => ({
            Component: (await import("./pages/music")).default,
          }),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
