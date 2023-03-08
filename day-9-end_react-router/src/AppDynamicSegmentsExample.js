import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
}

function Products() {
  return <div>Products</div>;
}

function Product() {
  let params = useParams();
  console.log(params);
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/product/1">Product with ID: 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product with ID: 2</Link>
        </li>
      </ul>
    </nav>
  );
}

function AppDynamicSegmentsExample() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default AppDynamicSegmentsExample;
