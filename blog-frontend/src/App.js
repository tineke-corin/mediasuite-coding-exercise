import './App.css';
import ListPosts from './ListPosts';
import ViewPost from './ViewPost';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<ListPosts/>} />
          <Route path="/posts" element={<ListPosts/>} />
          <Route path="/post/:slug" element={<ViewPost />} />
        </Routes>
      </Router>
  );
}

export default App;
