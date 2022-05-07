import React, { useState } from "react";
import { WomenCard } from "./Layout/WomenCard";
import { ProductTopdiv, ProductSortdiv, ProductContainer } from "./styled";
import "./Layout/Product.css";
import sneakers from "./Layout/Sneaker";

export const SneakerPro = () => {
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);
  const [filterData, setfilterData] = useState(sneakers);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "under50") {
      let newData = sneakers.filter((elem) => elem.price < 50);
      setfilterData([...newData]);
      console.log(filterData);
    } else if (value === "under100") {
      let newData = sneakers.filter((elem) => elem.price < 100);
      setfilterData([...newData]);
      console.log(newData);
    } else if (value === "under200") {
      let newData = sneakers.filter((elem) => elem.price < 200);
      setfilterData([...newData]);
      console.log(newData);
    } else if (value === "above200") {
      let newData = sneakers.filter((elem) => elem.price >= 200);
      setfilterData([...newData]);
      console.log(newData);
    }
  };
  const handleSort = (e) => {
    if (e.target.value === "h2l") {
      let sneakerdata = sneakers.sort((a, b) => {
        return b.price - a.price;
      });
      setHigh(true);
    }
    if (e.target.value === "l2h") {
      let sneakerdata = sneakers.sort((a, b) => {
        return a.price - b.price;
      });
      setLow(true);
      setHigh(false);
    }
  }
  return (
    <>
      <ProductTopdiv>
        <div>
          <h2>Sneakers</h2>
          <p>{sneakers.length} items found</p>
        </div>
        <div>
          <ProductSortdiv>
            <h5>SortBy</h5>
            <select
              style={{ height: "50px", borderRadius: "10px" }}
              onClick={handleSort}
            >
              <option value="rev">Relevance</option>
              <option value="h2l">High To Low</option>
              <option value="l2h">Low To High</option>
              <option value="rate">Costomer Ratings</option>
              <option value="new">New Arrival</option>
              <option value="brand">Brand Name</option>
            </select>
          </ProductSortdiv>
        </div>
      </ProductTopdiv>

      <ProductContainer>
        <div>
          <div style={{ padding: "2%" }}>
            <div style={{ padding: "2%" }}>
              <h5>Price</h5>
              <hr />
              <div>
                <form>
                  <div>
                    <input
                      type="radio"
                      value="under50"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$50 and Under</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="under100"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$100 and Under</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="under200"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$200 and Under</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="above200"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$200 and Over</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="topsdiv">
          {filterData.map((item) => {
            return (
              <WomenCard
                imageurl={item.imageurl}
                brand={item.brand}
                desc={item.desc}
                ratings={item.ratings}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
      </ProductContainer>
    </>
  );
};
