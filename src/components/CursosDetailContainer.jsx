// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { ItemDetail } from './ItemDetail'
// import { GetDetailProduct } from '../services/firebaseConfig'
// const ItemDetailContainer = () => {
//   const {id} = useParams()

//   const [product, setProduct] = useState()

//   useEffect(() => {
//     GetDetailProduct(id).then(data => data.length !== 0 ? setProduct({id: id, ...data}) : setProduct(data))
//   }, [id])
  
//   return (
//     <div className='flex justify-center my-10'>
//       <ItemDetail {...product}/>
//     </div>
      
//   )
// }

// export default ItemDetailContainer



import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { GetDetailCurso, GetDetailMolde } from '../services/firebaseConfig';
import { CartContext } from '../provider/CartProvider';
import CursosDetail from './CursosDetail'
import Cursos from './Cursos';


// const ItemDetailContainer = () => {
//   const { id } = useParams();
//   const { cart } = useContext(CartContext);

//   const [product, setProduct] = useState();
//   const [quantityInCart, setQuantityInCart] = useState(0);

//   useEffect(() => {
//     // Obtiene el producto detallado
//     GetDetailProduct(id).then((data) =>
//       data.length !== 0 ? setProduct({ id: id, ...data }) : setProduct(data)
//     );

//     // Obtiene la cantidad del producto en el carrito
//     const indexItem = cart.findIndex((item) => item.id === id);
//     if (indexItem !== -1) {
//       setQuantityInCart(cart[indexItem].quantity);
//     } else {
//       setQuantityInCart(0);
//     }
//   }, [id, cart]);

//   return (
//     <div className='flex justify-center my-10'>
//       <ItemDetail {...product} quantityInCart={quantityInCart} />
//     </div>
//   );
// };

// export default ItemDetailContainer;

const CursosDetailContainer = () => {
  const { id } = useParams();
  const { cart } = useContext(CartContext);

  const [cursos, setCurso] = useState();
  const [quantityInCart, setQuantityInCart] = useState(0);

  useEffect(() => {
    // Obtiene el producto detallado
    GetDetailCurso(id).then((data) =>
      data.length !== 0 ? setCurso({ id: id, ...data }) : setCurso(data)
    );

    // Obtiene la cantidad del producto en el carrito
    const indexItem = cart.findIndex((item) => item.id === id);
    if (indexItem !== -1) {
      setQuantityInCart(cart[indexItem].quantity);
    } else {
      setQuantityInCart(0);
    }
  }, [id, cart]);

  return (
    <div className='flex justify-center my-10'>
      <Cursos {...cursos} quantityInCart={quantityInCart} />
    </div>
  );
};

export default CursosDetailContainer;