import './App.css';
import { useState } from 'react';
import Header from './components/layout/Header';
import Products from './pages/Products';

function App() {
  const [toggleCategory, setToggleCategory] = useState(null);
  const toggleCategoriesHandler = (e) => {
    setToggleCategory(e.target.textContent);
  };
  let showCategory = toggleCategory;
  return (
    <div className="App">
      <Header toggleCategoriesHandler={toggleCategoriesHandler} />
      <Products showCategory={showCategory} />
    </div>
  );
}

export default App;
