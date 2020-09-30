import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../actions/productAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { pricingInfo } from "../../db/product"

const EditProduct = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [availability, setAvailability] = useState("")
    const [url, setUrl] = useState("")
    const [price, setPrice] = useState("")
    let [d_list, setDropDown] = useState([])
    const product = useSelector((state) => state.product.product);


    const budget = pricingInfo.budget
    const premier = pricingInfo.premier

    useEffect(() => {

        if (product != null) {
            setName(product.name);
            setAvailability(product.availability);
            setWeight(product.weight);
            setUrl(product.productUrl)
            setDropDown(d_list)
            setPrice(product.priceRange)
            setPrice(product.priceRange)


        }
        dispatch(getProduct(id));
    }, [product]);

    const updateData = (e) => {
        e.preventDefault();

        const updated_product = Object.assign(product, {
            name: name,
            weight: weight,
            availability: availability
        })

        history.push("/")
    }

    return (
        <>
            <div className="card border-0 shadow">
                <div className="card-header font-weight-bolder">Update Product Details</div>
                <div className="card-body">
                    <form onSubmit={(e) => updateData(e)}>
                        <div className="form-group row">
                            <label for="inputName" className="col-sm-2 col-form-label title">Name:</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputWeight" className="col-sm-2 col-form-label title">Weight:</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form-control" id="inputWeight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputAvailability" className="col-sm-2 col-form-label title">Availability:</label>
                            <div className="col-sm-10">
                                <input type="number" required className="form-control" id="inputAvailability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label for="inputUrl" className="col-sm-2 col-form-label title">Product Url:</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form-control" id="inputUrl" value={url} onChange={(e) => setUrl(e.target.value)} />
                            </div>
                        </div>



                        <div className="form-group row ">
                            <label for="inputUrl" className="col-sm-2 col-form-label title">Price Tier:</label>
                            <div className="col-sm-4">
                                <fieldset >
                                    <div className="form-control">

                                        <input type="radio" onChange={() => setDropDown(budget)} className="radio" name="x" value="y" id="y" />
                                        <label for="y">Budget</label>
                                        <input type="radio" onChange={() => setDropDown(premier)} className="radio" name="x" value="z" id="z" />
                                        <label for="z">Premier</label>

                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputUrl" className="col-sm-2 col-form-label title">Price range:</label>
                            <div className="col-sm-10">
                                <div className="input-group mb-10">
                                    <div className="input-group-prepend">

                                        <select name="price range" value="{price}" required className="form-control" id="price_range" placeholder="Select price tier"  >
                                            <option >{price}</option>
                                            {d_list.map(((b, i) => (
                                                <option required key={i} >{b}</option>
                                            )))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputCheckbox" className="col-sm-2 col-form-label title">Is editable?</label>
                            <div className="col-sm-1">
                                <input className="form-check-input" required type="checkbox" value="true" id="gridCheck1" />
                            </div>
                        </div>
                        <div className="col-sm-10 form-group">
                            <small>Please fill out & check all required fields before saving</small>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-warning">Save changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProduct