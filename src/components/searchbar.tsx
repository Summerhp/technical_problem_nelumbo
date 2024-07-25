import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  selectedCategory: string;
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, selectedCategory, onSearch, onCategoryChange }) => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Encuentra el producto que necesitas" aria-label="Buscar" value={searchTerm} onChange={(e) => onSearch(e.target.value)}/>
      <select className="form-select" aria-label="Categorías" value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all-categories">Todas las categorías</option>
        <option value="celulares">Celulares</option>
        <option value="motocicletas">Motos</option>
      </select>
    </div>
  );
};

export default SearchBar;
