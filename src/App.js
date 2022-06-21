import {useState} from "react";
import './App.css';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import About from "./components/pages/About";
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from "./components/context/FeedbackContext"


function App() {
  const [feedback,setFeedback] = useState(FeedbackData)

  return (
    <FeedbackProvider>
  <Router>
    <Header />
    <div className='container'>
      <Routes>
        <Route exact path="/" element={<>
          <FeedbackForm />
          <FeedbackStats />
          <FeedBackList />
          </>}>
          
        </Route>
      
        <Route path="/about" element={<About />} />
      </Routes>

      
    </div>
    <AboutIconLink />
    </Router>
    </FeedbackProvider>
  );
}

export default App;
