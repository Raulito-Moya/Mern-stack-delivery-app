import styled  from 'styled-components'
import useAddToCartButton from '../../hooks/useAddToCartButton'
import AppContext from '../../context/app-context'
import {  useContext} from 'react'
import {Link} from 'react-router-dom';
import shoopingCartIcon from '../../img/shopping-cart-solid.svg';
const Item = styled.div `
display:flex;
box-sizing:border-box;
border-radius:5px;
position:relative;
flex: 1 1 280px;
max-width:280px;
min-height:350px;
flex-flow:column;
margin:15px;
margin-left: 0;
over-flow:hidden;
padding:20px;
border: 1px solid #00000026;
box-shadow: 1px 1px 5px #00000057;
`
const Figcaption =styled.figcaption`
display:flex;
align-items:center;
padding-bottom:5px;
`;
const Name =styled.h4`
margin-bottom:0;
font-size:28px;
letter-spasing:0;
line-height:35px;
text-transform:capitalize ;
`
const ProductLink = styled(Link)`
text-decoration:none;
margin-bottom:2px;
  color: #272727;
`;
const Size = styled.small`
color: rgba(0,0,0,0.8);
font-weight:600;
margin-top:10px;
margin-left:5px;
`;
const Price = styled.h3 `
margin: 0 5px;
font-size:22px;
color:#fcba1c;

&:before{
  content:"$";
}
`
export const CartButton = styled.button`
margin-left:auto;
margin-top:auto;
box-shadow: 0 0 2px #000000bd;
padding:20px 0;
width:50px;
display:flex;
justify-content:center;
align-items:center;
background: ${(props) => props.isAdded  ? "#fcaf01" : "#272727"}  ;
outline:none;
border:none;
border-radius: 4px;
font-weight:600;
cursor:pointer;
font-size:20px;
color:#fff;
transition: all 0.3s ease;
&:hover{

  background: #fcaf01;
}

`;
const ImgContainer = styled.div`
height:230px;
width:100%;
overflow:hidden;
positon:relative;
display:flex;
justify-content:center;
margin-bottom:10px;

border-radius:5px;
box-shadow: 0 0 2px rgb(0 0 0 / 50%);
`;
const Img = styled.img`
transition:all 0.5s ease;
height:100%;
&:hover{
  transform:scale(0.8);
}
`;
export const CartIcon = styled.img`
width:20px;
height:20px;
transition: all 05s ease;

`;
export default function MenuItem(props){
  const item = props.item;
  const {cartProducts,addToCart,addToTotalCost}  = useContext(AppContext);
const {handlerAddToCartAndAddToTotalCost,isAdded} = useAddToCartButton(item,cartProducts,addToCart,addToTotalCost)







  return(
  <Item key={item._id}>

<ImgContainer> 

<Img src ={process.env.PUBLIC_URL +'/uploads/'+item.img} alt={item.name}></Img>



</ImgContainer>

      <ProductLink to={`/menu/${item._id}`}><Name>{item.name}</Name></ProductLink>  
   <Figcaption><Price >   {item.price}</Price> <Size>{item.size}  </Size>  </Figcaption> 
        
        {  window.location.pathname === "/dashboard/myProducts" ?
          props.children
         :
         <CartButton isAdded={isAdded}
       onClick={ () => {handlerAddToCartAndAddToTotalCost(item,parseInt(item.price))}}><CartIcon style={{  position:'absolute'}} src={shoopingCartIcon} alt="add-to-cart"/></CartButton>
      }
   
      
   </Item>
   );
}