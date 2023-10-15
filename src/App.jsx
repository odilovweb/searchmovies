// RRD
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//LAYOUT
import RooterLayout from "./Layouts/RooterLayout";

// PAGES
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import PageNotFound from "./pages/PageNotFound";
import Sign from "./pages/Sign";
import User from "./pages/User";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path="movie-detail/:id" element={<MovieDetail />} />
        <Route path="sign-up" element={<Sign />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
