import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import Header from "./components/Header";
import RoutesVar from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesVar />
    </BrowserRouter>
  );
}

export default App;
