import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Upload from "../Pages/Upload";
import HeaderOnly from "../Components/Layout/HeaderOnly";
import Search from "../Pages/Search";
import ProFile from "../Pages/ProFile";
import routerConfig from "../config/routes";

const publicRoutes = [
  { path: routerConfig.home, component: Home },
  { path: routerConfig.following, component: Following },
  { path: routerConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routerConfig.search, component: Search, layout: null },
  { path: routerConfig.profile, component: ProFile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
