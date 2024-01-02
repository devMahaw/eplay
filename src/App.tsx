import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import Header from "./components/Header";
import RoutesVar from "./routes";
import Footer from "./components/Footer";
import { store } from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <main>
          <RoutesVar />
          <Cart />
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
