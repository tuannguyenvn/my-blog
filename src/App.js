import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id = "page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route component={NotFoundPage} />
          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;
 