import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import Errorfile from './Errorfile';

const App: React.FC = () => {
  return (
    <Router>
      <Errorfile>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="posts" element={<PostListPage />} />
            <Route path="post/:id" element={<PostPage />} />
          </Route>
        </Routes>
      </Errorfile>
    </Router>
  );
};

export default App;
