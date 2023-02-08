import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/home';
import Page404 from './containers/page404';
import './utils/i18n/index';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route path="*" name="Page404" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
