import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../actions/productAction";
// import shortid from "shortid";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { pricingInfo } from "../../db/product"
// import {updateProduct,updateProduct} from "../../reducers/ProductReducer"

const EditProduct = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [availability, setAvailability] = useState("")
    const [url, setUrl] = useState("")
    const [is_edit, setEdit] = useState()
    let [d_list, setDropDown] = useState([])
    // const [pricing,setPricing]=useState(true)
    // const [radioBudgetSelected, radioBudgetSelection] = useState(false)   
    // const [radioPremierSelected, radioPremierSelection] = useState(false)    


    const product = useSelector((state) => state.product.product);
    // const drop_menu = useSelector((state) => state.budget);

    const budget = pricingInfo.budget
    const premier = pricingInfo.premier

    useEffect(() => {

        if (product != null) {
            setName(product.name);
            setAvailability(product.availability);
            setWeight(product.weight);
            setWeight(product.id);
            setUrl(product.productUrl)
            setDropDown(d_list)
            setEdit(product.isEditable)

        }
        dispatch(getProduct(id));
    }, [product]);
    // let {name} =useParams();
    // alert(name)
    const updateData = (e) => {
        e.preventDefault();
        // console.log(name, weight, availability);
        const updated_product = Object.assign(product, {
            name: name,
            weight: weight,
            availability: availability
        })
        console.log(updated_product);
        history.push("/")
    }

    return (
        <>
            <div className="card border-0 shadow">
                <div className="card-header">Update Product Details</div>
                <div className="card-body">
                    <form onSubmit={(e) => updateData(e)}>
                        <div className="form-group row">
                            <label for="inputName" className="col-sm-2 col-form-label title">Name</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputWeight" className="col-sm-2 col-form-label title">Weight</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form-control" id="inputWeight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputAvailability" className="col-sm-2 col-form-label title">Availability</label>
                            <div className="col-sm-10">
                                <input type="number" required className="form-control" id="inputAvailability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
                            </div>

                        </div>
                        <div className="form-group row">
                            <label for="inputUrl" className="col-sm-2 col-form-label title">Product Url</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form-control" id="inputUrl" value={url} onChange={(e) => setUrl(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row ">
                            <label for="inputUrl" className="col-sm-2 col-form-label title">Price Tier</label>
                            <fieldset >
                                <div className="form-control">
                                    <input type="radio" onChange={() => setDropDown(budget)} className="radio" name="x" value="y" id="y" />
                                    <label for="y">Budget</label>
                                    <input type="radio" onChange={() => setDropDown(premier)} className="radio" name="x" value="z" id="z" />
                                    <label for="z">Premier</label>
                                </div>
                            </fieldset>
                        </div>
                        <div className="form-group row">
                            <label for="inputUrl" className="col-sm-2 col-form-label title">Price range</label>
                            <div className="col-sm-10">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">

                                        <select name="price range" required className="form-control" id="price_range" placeholder="Select price tier"  >

                                            {d_list.map(((b, i) => (
                                                <option required key={i} >{b}</option>
                                            )))}
                                        </select>

                                    </div>
                                    {/* <input type="text" className="form-control" aria-label="Text input with dropdown button" /> */}
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputCheckbox" className="col-sm-2 col-form-label title">Is editable?</label>
                            <div className="col-sm-10">
                                <input className="form-check-input" required type="checkbox" id="gridCheck1" />
                            </div>
                        </div>
                        <div className="col-sm-10 form-group">
                        <small>Please fill out all required fields before saving</small>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                {/* <Link to="/"> */}

                                <button type="submit" className="btn btn-warning">Save changes</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProduct