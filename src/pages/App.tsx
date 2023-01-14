import { GlobalStyleCss } from "../styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../router'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyleCss />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
