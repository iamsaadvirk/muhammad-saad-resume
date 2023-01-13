import './App.css';
import HomeLayout from './components/hoc/HomeLayout';
import Blog from './components/blog/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/hoc/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<HomeLayout />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
