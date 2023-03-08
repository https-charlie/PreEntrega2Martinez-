
import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import './styles.css';

const ropas = [
  {id: 1, title: 'Sweater Black Phantom', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis commodo mollis. Etiam cursus posuere eros et feugiat. Cras efficitur interdum neque in mollis. Fusce non maximus velit. Nam rhoncus iaculis eros, nec aliquam sapien imperdiet quis. Vivamus porta finibus quam, a ullamcorper ligula sodales vitae. Donec ut sapien eu felis gravida malesuada. Quisque varius elit dictum sapien laoreet mattis. Curabitur diam velit, auctor sed nibh a, vestibulum tempor augue. In et fringilla ipsum. Cras maximus, nisi vel fermentum auctor, erat lacus eleifend felis, sit amet consectetur dolor erat non mauris. Integer euismod urna eu nibh iaculis vulputate.', price: 3500, pictureUrl:'/sweater-negro.png'},

  {id: 2, title: 'Sweater White Phantom', description:'Sed tempus, diam in pretium posuere, sem quam finibus nisl, ac placerat enim libero id elit. Donec ornare placerat velit a porta. Nullam ac lacinia nulla, nec porttitor diam. Nullam porta facilisis nunc nec semper. Curabitur in justo ac lectus hendrerit porttitor. Vivamus id dui aliquet nunc suscipit accumsan ut id nunc. Nam luctus eleifend est, non posuere ipsum tristique eget. Pellentesque porttitor nisl in augue sodales dictum. Suspendisse nunc nisi, sollicitudin eu orci nec, feugiat luctus nunc. Praesent feugiat mauris ullamcorper efficitur malesuada. Fusce efficitur leo eu massa sodales, faucibus semper eros semper. Nullam quis suscipit urna. In quis tortor vitae nisi tincidunt accumsan a auctor est. Curabitur tempus sed magna nec ornare. Suspendisse diam justo, feugiat eget arcu eget, malesuada commodo est.', price: 3500, pictureUrl:'/sweater-blanco.png'},

{id: 3, title: 'Jogger Black Phantom', description:'Donec aliquam tincidunt purus pharetra euismod. Mauris odio dolor, cursus sed diam ut, bibendum laoreet urna. Maecenas semper, quam eu euismod commodo, nisi ante convallis enim, eu porta orci augue sit amet dolor. Suspendisse sit amet mauris vel neque porta dictum nec ac enim. ', price: 7000, pictureUrl:'/jogger-negro.png'}
]




function ItemDetailContainer() {
const [data, setData] = useState([]);
const {idUser} = useParams()

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(()=>{
          resolve(ropas)
      },1000)
    });
    getData.then(res => setData(res.find(ropas => ropas.id === parseInt(idUser) )))
    
  },[]  )


    /*if (idProduct) {
      getData.then(res => res.filter(detalle => detalle.id === parseInt(idProduct) ))
    }else{
      getData.then(res => setData(res))
    }*/


  return (
    <div className="container  mt-5 ">
      <div className="row justify-content-between">
        <ItemDetail data={data}/>
        </div>
    </div>
    
  );
  
}

export default ItemDetailContainer;