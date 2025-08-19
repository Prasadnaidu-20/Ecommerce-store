import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import styles from '../css/ProductDetails.module.css';

const ProductDetails = () => {
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setProduct(data);
                setLoading(false);
            })
            .catch(()=>{
                setLoading(false);
            });
    },[id])

    if(loading) return <p>Loading...</p>
    if(!product) return <p>Product not found</p>
    return(
        <div className={styles.detailsContainer}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} className={styles.image} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>${product.price}</div>
                <div className={styles.category}>{product.category}</div>
                <div className={styles.description}>{product.description}</div>
            </div>
        </div>
  );
}

export default ProductDetails