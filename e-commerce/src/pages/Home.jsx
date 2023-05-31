// import '../App.css';
// import ProductCard from "../components/ProductCard";
// import Search from "../components/Search";
// import Container from "react-bootstrap/esm/Container";
// import Row from 'react-bootstrap/Row';
// import axios from 'axios';
// import Col from 'react-bootstrap/Col';
// import { useEffect,useState } from "react";
// import Footer from"../components/Footer";
// import { APIS } from "../apis";


// function Home(props) {
// const [products,setProductas] = useState([])
// const [data , setData] = useState([])
// useEffect(()=>{
//   getProducts()
// },[])



// function getProducts() {
//   axios.get(APIS.PRODUCTS) // getting all products from the products(db)
//     .then((response) => {
//       const res = response.data;
//       console.log(res);
//       const products = res.map((product) => {
//         product.selected = false;
//         return product;
//       });
//       setProductas(products);
//       setData(products);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Api call is completed");
//     });
// }


// function onSearched(term){        //search function
//   console.log(term)
//   if(!term){
//     setProductas(data);
//     return
//   }
//   const filtered = data.filter((item)=>{
//     const titleLowerCased = item.title.toLowerCase();
//     const termLowerCased = term.toLowerCase();
//     return titleLowerCased.indexOf(termLowerCased)!==-1  // it checks the title lowercased is there or not in termlowercased  //
//   })
//   setProductas(filtered)
// }


// function renderCols() {
//   return products.map(function (product,index) {
//     return (
  
//     <Col md={4} lg={3} key={index}>
//     <ProductCard item={product} reload={getProducts} setReloadNavbar={props.setReloadNavbar}/>
//     </Col>
     
//     )
//   })
// }

//   return (
//    <>
   
//    <Search onSearch={onSearched}/>


//    <Container>
//     <Row>
//     {renderCols()}  
//     </Row>   
//    </Container>
//    <div>
//     < Footer />
//    </div>
//    </>
//   );
// }

// export default Home;




import '../App.css';
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { APIS } from "../apis";
import { Empty } from 'antd';

function Home(props) {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get(APIS.PRODUCTS)
      .then((response) => {
        const res = response.data;
        console.log(res);
        const products = res.map((product) => {
          product.selected = false;
          return product;
        });
        setProducts(products);
        setData(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        console.log("Api call is completed");
      });
  }

  function onSearched(term) {
    console.log(term);
    if (!term) {
      setProducts(data);
      return;
    }
    const filtered = data.filter((item) => {
      const titleLowerCased = item.title.toLowerCase();
      const termLowerCased = term.toLowerCase();
      return titleLowerCased.indexOf(termLowerCased) !== -1;
    });
    setProducts(filtered);
  }

  function renderCols() {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (products.length === 0) {
      return <h2 className='text-center mt-5 mb-5'> <Empty /></h2>;
    }

    return products.map(function (product, index) {
      return (
        <Col md={4} lg={3} key={index}>
          <ProductCard item={product} reload={getProducts} setReloadNavbar={props.setReloadNavbar} />
        </Col>
      );
    });
  }

  return (
    <>
      <Search onSearch={onSearched} />
      <Container>
        <Row>
          {renderCols()}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
