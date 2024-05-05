"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [products, setProducts] = useState<any>();
  const [btn, setBtn] = useState("Add");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  const handleProduct = () => {
    btn === "Update"
      ? fetch(`api/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, price }),
        })
      : fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, price }),
        });
  };

  return (
    <>
      <div className="flex flex-col gap-4 max-w-md mx-auto p-4 border border-red-800">
        {products?.map((product: any, i: number) => (
          <div
            key={i}
            className="flex justify-between gap-2 cursor-pointer bg-slate-200 rounded-md p-2"
            onClick={() => {
              setName(product.name);
              setPrice(product.price);
              setBtn("Update");
              setId(product?._id);
            }}>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col max-w-md mx-auto border border-b-slate-400 p-4 gap-4">
        Add Product
        <input
          className="border border-black px-4 py-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
        />
        <input
          className="border border-black px-4 py-2"
          placeholder="Price"
          value={price}
          type="number"
          onChange={(e) => setPrice(parseInt(e?.target?.value))}
        />
        <button
          className="bg-green-400 py-2"
          type="submit"
          onClick={handleProduct}>
          {btn}
        </button>
      </div>
    </>
  );
}
