const products = [
    { id: 1, name: 'Olympea', price: 45000 },
    { id: 2, name: 'Buclera', price: 30000 },
    { id: 3, name: 'Máscara de pestañas', price: 4500 },

  ];
  
  const ProductList = () => {
    return (
      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;
  