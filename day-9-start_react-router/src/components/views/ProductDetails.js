import {useParams} from "react-router-dom";

const ProductDetails = () => {
  let params = useParams();
  console.log("params: ",params);
  console.log(params.id)
  return (
    <div>
      <h1>Hello i am product details page {params.id}</h1>
    </div>
  );
};

export default ProductDetails;
