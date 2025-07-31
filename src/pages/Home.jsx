import React,{useEffect, useState} from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products,setProducts] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState('');
    const[categories,setCategories] = useState([]);
    const[selectedCategory,setSelectedCategory] = useState('all');
    const[searchTerm,setSearchTerm] = useState("");
    const[sortOption,setSortOption] = useState('default');

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res=>setCategories(res.data))
            .catch(err=>console.log("error fetching categories"));
    },[])
    //normal fetching
    
    useEffect(()=>{
        setLoading(true);
        const url = selectedCategory === 'all'?' https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        axios.get(url)
        .then(res=>{
            setProducts(res.data);
            setLoading(false);
        })
        .catch(err=>{
            setError(err.message);
            setLoading(false);
        })
    },[selectedCategory])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error}</p>
  return (
    <>
    <div className="controls">
        <select onChange={(e)=>setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value='all'>All</option>
            {categories.map((category)=>{
                return <option key={category} value={category}>{category}</option>
            })}
        </select>
    </div>
    <div className='container' style={{display:'flex',flexWrap:'wrap',gap:'20px'} }>
            {products.map((product)=>{
                return <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}/>
            })}
        
    </div>
    </>
  )
}

export default Home