import React from "react";
import { useCart } from "../context/CartContext";
import styles from '../css/ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useState } from "react";


const ProductCard = ({ id, title, image, price }) => {
  const { addToCart } = useCart();
  const [showMsg, setShowMsg] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, image, price });
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1200); // Hide after 1.2s
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>${price}</div>
      <button className={styles.button} onClick={handleAddToCart}>
        Add to Cart
      </button>
      <Link to={`/product/${id}`} className={styles.detailsBtn}>
  View Details
</Link>
{showMsg && (
        <div className={styles.cartMsg}>Item added to cart!</div>
      )}
    </div>
  );
};

export default ProductCard;