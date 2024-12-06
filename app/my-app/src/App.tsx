import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CategoryFilter from './CategoryFilter';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const categories = ['Все', 'маркетинг', 'программирование', 'котики', 'фильмы'];

  return (
    <div>
      <Header />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Main category={selectedCategory} />
      <Footer />
    </div>
  );
};

export default App;
