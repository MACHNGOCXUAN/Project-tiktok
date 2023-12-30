import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Upload from "../Pages/Upload";
import HeaderOnly from "../Components/Layout/HeaderOnly";
import Search from "../Pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
