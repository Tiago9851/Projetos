// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://sua-api.com",
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const submitOrder = async (order) => {
  const response = await api.post("/orders", order);
  return response.data;
};
// pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import CoffeeList from "../components/CoffeeList";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return <CoffeeList products={products} />;
};

export default HomePage;
