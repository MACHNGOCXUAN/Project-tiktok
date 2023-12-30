import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./Routes";
import DefaultLayout from "./Components/Layout/DefaultLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Pages = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Pages />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
