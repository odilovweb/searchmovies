// RRD
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import RooterLayout from "./Layouts/RooterLayout";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path="movie-detail/:id" element={<MovieDetail />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
