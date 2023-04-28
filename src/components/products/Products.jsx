import React, { useContext } from "react";
import "./products.css";
import { CustomButton } from "../../resources/buttons/customButton/CustomButton";
import { ApiContext } from "../../api/ApiContext";

export const Products = () => {
  const product = useContext(ApiContext);

  return (
    <>
      <div className="products-container-total">
        {product.map((item, idx) => (
          <li key={idx}>
            <section className="product-container">
              <img
                src={item.featuredImage.url}
                alt={item.title}
                className="img-container"
              />
              <div className="product-details-wrap">
                <section>
                  <h3 className="title-product"> {item.title} </h3>
                  <div className="rating-wrap">
                    <h5>estrellas</h5>
                    {item.tags === "number" ? (
                      <h5 className="rating"> {item.tags}</h5>
                    ) : (
                      <h5> (0) </h5>
                    )}
                  </div>
                </section>
                <section className="prices-wrap">
                  <h6 className="price-min">&euro;{item.prices.min.amount}</h6>
                  <h6 className="price-max">&euro;{item.prices.max.amount}</h6>
                </section>
              </div>
            </section>
          </li>
        ))}
      </div>

      <div className="button-container">
        <CustomButton buttonTitle={"Browse all products"} />
      </div>
    </>
  );
};
