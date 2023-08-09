import React from "react";
import ItemCard from "./ItemCard";

export default function Item() {
  return (
    <>
      <section className="Item pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5 text-center">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </section>
    </>
  );
}
