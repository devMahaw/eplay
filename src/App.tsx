import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalCss } from "./styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductsList from "./components/ProductsList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
      </>
    )
  }
]);

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
