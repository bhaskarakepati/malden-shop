import React from 'react'
import {Link} from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'
import {Row,Col,ListGroup,Image,Button} from 'react-bootstrap'

const ProductDetailScreen = ({match}) => {
    const product = products.find((product)=>product._id===match.params.id)
    return (
        <>
            <Link className="btn btn-light" to="/">Go Back</Link>
            <Row className="my-3">
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><h3>{product.name}</h3></ListGroup.Item>
                        <ListGroup.Item><Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price</Col>
                                <Col>£ {product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status</Col>
                                <Col>{product.countInStock > 0?'In Stock':'Out Of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetailScreen
