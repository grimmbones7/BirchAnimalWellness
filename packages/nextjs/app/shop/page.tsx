"use client";

import React from "react";
import Image from "next/image";
import HeaderOverlay from "~~/components/HeaderOverlay";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Blockchain Basics eBook",
    category: "EBook",
    price: 19.99,
    image: "/images/ebook1.jpg",
    description: "A comprehensive guide to blockchain technology",
  },
  {
    id: 2,
    name: "Smart Contracts Explained",
    category: "EBook",
    price: 24.99,
    image: "/images/ebook2.jpg",
    description: "Deep dive into smart contract development",
  },
  {
    id: 3,
    name: "Web3 Development Workshop",
    category: "Presentation Recording",
    price: 49.99,
    image: "/images/recording1.jpg",
    description: "Recorded workshop on Web3 development",
  },
  {
    id: 4,
    name: "DeFi Fundamentals",
    category: "Presentation Recording",
    price: 39.99,
    image: "/images/recording2.jpg",
    description: "Introduction to Decentralized Finance",
  },
  {
    id: 5,
    name: "NFT Creation Guide",
    category: "EBook",
    price: 29.99,
    image: "/images/ebook3.jpg",
    description: "Step-by-step guide to creating and selling NFTs",
  },
  // Add more products as needed
];

const categories = ["All", ...new Set(products.map(product => product.category))];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [priceRange, setPriceRange] = React.useState(100);

  const filteredProducts = products.filter(
    product => (selectedCategory === "All" || product.category === selectedCategory) && product.price <= priceRange,
  );

  return (
    <>
      <HeaderOverlay title="Shop" backgroundImage="/Headerbanner/lightwood.png" />

      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-100 w-full px-8">
          <div className="mb-2">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="border rounded p-2"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2">Max Price: ${priceRange}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange}
                  onChange={e => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                  <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
