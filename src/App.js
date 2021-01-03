import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div id = "page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/articles-list" component={ArticlesList} />
        </div>
      </div>
    </Router>

  );
}

export default App;
 