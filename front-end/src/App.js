import './App.css';
import HomeLayout from './components/hoc/HomeLayout';
import Blog from './components/blog/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/hoc/Layout';
import Category from './components/blog/Category';
import BlogDetail from "./components/blog/BlogDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<HomeLayout />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/category/:id' element={<Category />} />
          <Route exact path='/blog/:id' element={<BlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
