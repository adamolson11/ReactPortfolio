
import PortfolioContainer from "./components/PortfolioContainer";

import 'bootstrap/dist/css/bootstrap.min.css'; //needs to go here above appl
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: '#156064' }}> {/* Set the background color for the entire page */}
      <PortfolioContainer />
    </div>
  );
}

export default App
