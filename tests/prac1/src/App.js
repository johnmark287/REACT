// import logo from './logo.svg';
import './App.css';
import BindEventHandlers from './components/class/BindEventHandlers';
import HookCounter from './components/function/useState/HookCounter';
import ParentComponent from './components/class/ParentComponent';
import ClassCounter from './components/function/useState/ClassCounter';
import HookCounterTwo from './components/function/useState/HookCounterTwo';
import HookWithObjects from './components/function/useState/HookWithObjects';
import ConditionalRendering from './components/class/ConditionalRendering';
import PersonList from './components/function/PersonList';
import StyleSheet from './components/function/styling/StyleSheet';
import { useState } from 'react';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input 
      type="text"
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)}
      placeholder="Search..." />
      <label>
        <input 
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.value)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
          filterText={filterText} 
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly} />
      <ProductTable
          products={products}
          filterText={filterText} 
          inStockOnly={inStockOnly} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  return (
    <div className="App">
      {/* <BindEventHandlers /> */}
      {/* <ParentComponent /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookWithObjects /> */}
      {/* <ConditionalRendering /> */}
      {/* <PersonList /> */}
      {/* <StyleSheet primary={false}/> */}
      <FilterableProductTable products={PRODUCTS} />;
    </div>
  );
}

export default App;
