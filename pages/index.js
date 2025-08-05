import { useState } from 'react';

const products = [
  { id: 1, name: "Roasted Seviyan", price: 80, stock: 25, image: "/placeholder1.jpg" },
  { id: 2, name: "Raw Macaroni", price: 60, stock: 40, image: "/placeholder1.jpg" },
  { id: 3, name: "Raw Pasta Noodles", price: 70, stock: 30, image: "/placeholder1.jpg" }
];

export default function DeleciaStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">Delecia 🍜</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="rounded-xl shadow bg-white p-4">
            <img src={p.image} className="w-full h-40 object-cover mb-3 rounded" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p className="text-sm text-green-600">Stock: {p.stock}</p>
            <button onClick={() => addToCart(p)} className="mt-2 bg-orange-600 text-white px-3 py-1 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-orange-800">Your Cart 🛒</h2>
        {cart.length === 0 ? <p className="text-gray-500">Cart is empty.</p> :
          <ul>{cart.map((item, i) => <li key={i}>{item.name} - ₹{item.price}</li>)}</ul>}
        <div className="mt-4 text-right font-semibold">Total: ₹{total}</div>
      </div>
    </div>
  );
}
