import { ResponseData } from '@/app/(ViewModel)/ResponseData';
import { ProductVM } from '@/app/(ViewModel)/ProductVM';
import React from 'react'
import ImgProduct from '@/app/(component)/containerPages/DetailComponent/ImgProduct';
import ListButtonImg from '@/app/(component)/containerPages/DetailComponent/ListButtonImg';

const getProductDetailById = async (id: string): Promise<ResponseData<ProductVM> | null> => {
    //fetch có hỗ trợ cache, còn axios thì không, nên dùng fetch để tận dụng cache
    try {
        const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`, {
            cache: 'force-cache', next: {
                revalidate: 300
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching product detail:", error);
        return null;
    }
}

type Props = {
    params: Promise<{ id: string }> | { id: string }
}

const page = async (props: Props) => {
    const { id } = await props.params;
    const response: ResponseData<ProductVM> | null = await getProductDetailById(id);
    const prodDetail: ProductVM = response?.content || {} as ProductVM;
    console.log("productDetail", prodDetail);
    return (
        <div className="container mt-5 mb-5">
            {/* Product Detail Section */}
            <div className="row mb-5">
                {/* Product Image */}
                <div className="col-lg-4 col-md-5 mb-4 mb-lg-0">
                    <div className="card border-0 shadow-sm">
                        <ImgProduct prodDetail={prodDetail} />
                    </div>
                    <ListButtonImg prodDetail={prodDetail} />
                </div>

                {/* Product Information */}
                <div className="col-lg-8 col-md-7">
                    <h1 className="mb-3 fw-bold text-dark">{prodDetail.name}</h1>

                    {/* Price */}
                    <div className="mb-3">
                        <span className="h3 text-danger fw-bold">${prodDetail.price}</span>
                        {prodDetail.feature && (
                            <span className="badge bg-warning text-dark ms-2">Featured</span>
                        )}
                    </div>

                    {/* Short Description */}
                    <p className="text-muted mb-4">
                        {prodDetail.shortDescription}
                    </p>

                    {/* Size Selection */}
                    {prodDetail.size && prodDetail.size.length > 0 && (
                        <div className="mb-4">
                            <label className="fw-bold mb-2 d-block">Available Sizes:</label>
                            <div className="d-flex gap-2 flex-wrap">
                                {prodDetail.size.map((size) => (
                                    <button
                                        key={size}
                                        className="btn btn-outline-secondary"
                                        style={{ width: '60px' }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity Section */}
                    <div className="mb-4">
                        <label className="fw-bold mb-2 d-block">Quantity:</label>
                        <div className="input-group" style={{ width: '150px' }}>
                            <button className="btn btn-outline-secondary" type="button">−</button>
                            <input
                                type="text"
                                className="form-control text-center"
                                value="1"
                                readOnly
                            />
                            <button className="btn btn-outline-secondary" type="button">+</button>
                        </div>
                        <small className="text-muted d-block mt-1">
                            {prodDetail.quantity} in stock
                        </small>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 mb-4">
                        <button className="btn btn-danger btn-lg flex-grow-1">
                            <i className="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <button className="btn btn-outline-secondary btn-lg">
                            <i className="bi bi-heart"></i>
                        </button>
                    </div>

                    {/* Categories */}
                    {prodDetail.categories && prodDetail.categories.length > 0 && (
                        <div>
                            <span className="fw-bold">Category: </span>
                            {prodDetail.categories.map((cat) => (
                                <span key={cat.id} className="badge bg-light text-dark me-2">
                                    {cat.category}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Product Description */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3">Product Details</h3>
                            <p className="card-text text-muted" style={{ lineHeight: '1.8' }}>
                                {prodDetail.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {prodDetail.relatedProducts && prodDetail.relatedProducts.length > 0 && (
                <div className="row">
                    <div className="col-12 mb-4">
                        <h3 className="fw-bold">Related Products</h3>
                        <hr className="border-danger" />
                    </div>
                    {prodDetail.relatedProducts.map((relProduct) => (
                        <div key={relProduct.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 border-0 shadow-sm hover-highlight" style={{ transition: 'transform 0.3s' }}>
                                <img
                                    src={relProduct.image || 'https://via.placeholder.com/300'}
                                    alt={relProduct.name}
                                    className="card-img-top"
                                    style={{ objectFit: 'cover', height: '250px' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{relProduct.name}</h5>
                                    <p className="card-text text-muted text-truncate" style={{ maxLines: 2 }}>
                                        {relProduct.shortDescription}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="h5 text-danger fw-bold mb-0">${relProduct.price}</span>
                                        <a className="btn btn-sm btn-danger" href={`/detail/${relProduct.id}`}>View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default page