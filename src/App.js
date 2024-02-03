import './App.css';

import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer'

import Homepage from './pages/Homepage';
import Servicespage from './pages/Servicespage';
import Websitespage from './pages/Websitespage';
import Automationpage from './pages/Automationpage';
import CustomSolutionspage from './pages/CustomSolutionspage';

import Contactpage from './pages/Contactpage';

import styled from 'styled-components';

const Body = styled.div`
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  margin:0;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Router>
    <Body>
      <Header/>
      <Content>
        
          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route exact path="/About" element={<Homepage />} />

            <Route exact path="/Services" element={<Servicespage />} />
            <Route exact path="/Services/Websites" element={<Websitespage />} />
            <Route exact path="/Services/Automation" element={<Automationpage />} />
            <Route exact path="/Services/Custom Solutions" element={<CustomSolutionspage />} />

            <Route exact path="/Contact" element={<Contactpage />} />

            <Route path="*" element={<Homepage />} />
          </Routes>
      </Content>
      <Footer/>
    </Body>
    </Router>
  );
}

export default App;
