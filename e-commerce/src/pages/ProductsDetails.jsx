
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Dropdown } from 'react-bootstrap';
import environment from "../environment";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import ConfirmModel from '../components/ConfirmModel';
import { toast } from 'react-toastify';
import { APIS } from '../apis';
import ReactPaginate from 'react-paginate';
import { Button, Popconfirm } from 'antd';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5); // Default 5 rows per page
  const [verify, setVerify] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${environment.api}/products`); // getting product data from db
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handlePerPageChange = (value) => {
    setCurrentPage(0);
    setPerPage(value);
  };

  const offset = currentPage * perPage;
  const pageCount = Math.ceil(products.length / perPage);
  const currentProducts = products.slice(offset, offset + perPage);

  function onDelete(productId) {
    setVerify(true);
    setDeleteId(productId);
  }

  function confirmDelete() {
    axios
      .delete(APIS.DELETE_PRODUCT(deleteId)) // deleting the product from db
      .then((res) => {
        setVerify(false);
        toast.success('Product Deleted Successfully!', { theme: 'colored' });
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Product Deleting failed!', { theme: 'colored' });
      });
  }

  function handleClose() {
    setVerify(false);
  }

  return (
    <div className="container product-details ">
      <h2 className="text-center text-primary mb-3">Shopify Products Data</h2>
      <div className="card shadow-lg">
      {/* <div className="table-responsive"> */}
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Available Qty</th>
              <th>Total Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={product._id}>
                <td>{offset + index + 1}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.available_qty}</td>
                <td>{product.total_qty}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/product/${product._id}`)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>


                    {/* <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <Button danger  onClick={() => onDelete(product._id)}>Delete</Button>
  </Popconfirm> */}



                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(product._id)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
{/* </div> */}
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="secondary"
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </Button>


          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="rows-per-page-dropdown">
              Rows Per Page: {perPage}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handlePerPageChange(5)}>5</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePerPageChange(10)}>10</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePerPageChange(15)}>15</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePerPageChange(20)}>20</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePerPageChange(30)}>30</Dropdown.Item>

              {/* Add more options as needed */}
            </Dropdown.Menu>
          </Dropdown>

          <Button
            variant="secondary"
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage === pageCount - 1}
          >
            Next
          </Button>
        </div>
      </div>
      {/* {verify ? (
        <ConfirmModel
          onClose={handleClose}
          onConfirm={confirmDelete}
          message="Are you sure you want to delete this record?"
        />
      ) : (
        ''
      )} */}
    </div>
  );
};

export default ProductDetails;






