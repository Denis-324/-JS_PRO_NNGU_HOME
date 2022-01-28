/* eslint-disable react/react-in-jsx-scope */
import AboutPage from "../containers/AboutPage";
import CardPageOne from "../containers/CardPageOne";
import MainPage from "../containers/MainPage";
import NonFoundPage from "../containers/NonFoundPage";

type routesConfigType = {
  path: string;
  element: any;
}[];

const routesConfig: routesConfigType = [
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/product/:id",
    element: <CardPageOne />,
  },
  {
    path: "*",
    element: <NonFoundPage />,
  },
];
export default routesConfig;
