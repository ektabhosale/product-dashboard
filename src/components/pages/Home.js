import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"
// import products from '../../db/product'
// import Contact from "./Contact";
// import {
//   selectAllContact,
//   clearAllContact,
//   deleteAllContact,
// } from "../../actions/contactAction";

const Home = (product) => {
  const { name, phone, email, id } = product;
  // const dispatch = useDispatch();
  // const [selectAll, setSelectAll] = useState(false);
  const products = useSelector((state) => state.product.products);
  // const selctedContcats = useSelector(
  //   (state) => state.contact.selectedContacts
  // );

  // useEffect(() => {
  //   if (selectAll) {
  //     dispatch(selectAllContact(contacts.map((contact) => contact.id)));
  //   } else {
  //     dispatch(clearAllContact());
  //   }
  // }, [selectAll]);

  return (
    <>
      <div className="">
        <table className="table shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Weight</th>
              <th scope="col">Availability</th>
              <th scope="col">isEditable</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
              

              {products.map(((product,i) => (
                
                <tr>
                  <th scope="row">{i+1}</th>
                  <td key={i}>{product.name}</td>
                  <td key={i}>{product.weight}</td>
                  <td key={i}>{product.availability}</td>
                  <td key={i}><Link to={`/edit-product/${product.name}`}><button className="btn-dark" hidden={!product.isEditable}>Edit</button></Link></td>
                </tr>
                
              )))}
            {/* </tr> */}

          </tbody>
        </table>
      </div>
    </>
  )
};

export default Home;