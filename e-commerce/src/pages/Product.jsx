import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { APIS } from '../apis';
import CardHeader from 'react-bootstrap/esm/CardHeader';


const Product = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const defaultValues = {
    title: "",
    description: "",
    price: "",
    available_qty: "",
    total_qty: "",
    image: "",
  }
  const [product, setProduct] = useState(defaultValues);  // getting the products by id
  useEffect(() => {
    if (!id) {
      return;
    }
    axios("http://localhost:3001/products/" + id)   // id is there than update res to setproduct for famrik nd opetations
      .then((res) => {
        console.log(res.data)
        const temp = { ...defaultValues, ...res.data }
        console.log(temp)
        setProduct(temp)

      })
  }, [])

  const formik = useFormik({
    initialValues: product,
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Must be  3 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .min(3, "Must be  3 characters or more")
        .max(150, "Must be 15 characters or less")
        .required("Required"),
        price: Yup.number()
      .typeError("Price must be a number")
      .min(0, "Price cannot be negative")
      .required("Required"),
    available_qty: Yup.number()
      .typeError("Available quantity must be a number")
      .min(0, "Available quantity cannot be negative")
      .max(Yup.ref("total_qty"), "Available quantity cannot exceed total quantity")
      .required("Required"),
    total_qty: Yup.number()
      .typeError("Total quantity must be a number")
      .min(0, "Total quantity cannot be negative")
      .required("Required"),
        image: Yup.string()
        .matches(
          /^(https?:\/\/)?(www\.)?([^\s.]+\.\S{2,}|localhost[:?\d]*)\S*$/,
          'Please enter a valid URL'
        )
        .required('Image URL is required'),
    }),

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      if (id) {//id is available so update requst
        axios.put(APIS.EDIT_PRODUCT(id), values)
          .then(function (response) {
            console.log(response);
            toast.success("Product Edited Successfully!", { theme: "colored", });
            navigate('/')
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      else {//id is not available so create requst
        axios.post(APIS.ADD_PRODUCTS, values)
          .then(function (response) {
            console.log(response);
            toast.success("Product Created Successfully!", { theme: "colored" });

            navigate('/')
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },
  })



  return (

    <Container className='my-4 '>
      <Row className='justify-content-center'>
        <Col md={8}>
          <Card className='shadow-lg rounded product-edit-container'>
            <CardHeader className='py-3'>
              <h3 className='text-center mb-0'>Creat a Product</h3>
            </CardHeader>
            <Card.Body className='pt-4 px-5 pb-5'>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className='mb-3' controlId='title'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type='text'
                    name='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder='Enter Title' />

                  <Form.Text className='text-danger'>
                    {formik.touched.title && formik.errors.title ? (
                      <div className='text-danger'>{formik.errors.title}</div>
                    ) : null}
                  </Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='description'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    name='description'
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder='Enter Description' />

                  <Form.Text className='text-danger'>
                    {formik.touched.description && formik.errors.description ? (
                      <div className='text-danger'>{formik.errors.description}</div>
                    ) : null}
                  </Form.Text>
                </Form.Group>

                <div className=' row d-flex justify-content-between'>
                  <div className="col">
                    <Form.Group className='mb-3' controlId='price'>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type='text'
                        name='price'
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder='Enter Price' />

                      <Form.Text className='text-danger'>
                        {formik.touched.price && formik.errors.price ? (
                          <div className='text-danger'>{formik.errors.price}</div>
                        ) : null}
                      </Form.Text>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <Form.Group className='mb-3' controlId='available_qty'>
                      <Form.Label>Available Quantity</Form.Label>
                      <Form.Control
                        type='text'
                        name='available_qty'
                        onChange={formik.handleChange}
                        value={formik.values.available_qty}
                        placeholder='Enter quantity' />

                      <Form.Text className='text-danger'>
                        {formik.touched.available_qty && formik.errors.available_qty ? (
                          <div className='text-danger'>{formik.errors.available_qty}</div>
                        ) : null}
                      </Form.Text>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <Form.Group className='mb-3 ' controlId='total_qty'>
                      <Form.Label>Total Quantity</Form.Label>
                      <Form.Control
                        type='text'
                        name='total_qty'
                        onChange={formik.handleChange}
                        value={formik.values.total_qty}
                        placeholder='Enter quantity' />

                      <Form.Text className='text-danger'>
                        {formik.touched.total_qty && formik.errors.total_qty ? (
                          <div className='text-danger'>{formik.errors.total_qty}</div>
                        ) : null}
                      </Form.Text>
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className='mb-5' controlId='image'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    name='image'
                    onChange={formik.handleChange}
                    value={formik.values.image}
                    placeholder='Enter Image location or path' />

                  <Form.Text className='text-danger'>
                    {formik.touched.image && formik.errors.image ? (
                      <div className='text-danger'>{formik.errors.image}</div>
                    ) : null}
                  </Form.Text>
                </Form.Group>
                <div className="text-center ">
                  <Button variant="success" type="submit" className='  w-100' >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default Product;
