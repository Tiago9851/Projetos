import React from "react";

const CoffeeList = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Cafés Disponíveis</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Preço: R${product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeList;