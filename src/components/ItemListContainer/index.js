import './styles.css';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const closeth = [
  {id: 1, title: 'Sweater Black Phantom', description:'Sweater bonito', price: 3500, pictureUrl:'/sweater-negro.png', categoria:'Sweaters'},

  {id: 2, title: 'Sweater Wite Phantom', description:'Sweater bonito', price: 3500, pictureUrl:'/sweater-blanco.png', categoria:'Sweaters'},

  {id: 3, title: 'Jogger Black Phantom', description:'Jogger bonito', price: 7000, pictureUrl:'/jogger-negro.png', categoria:'Joggers'}

]

function ItemListContainer({greeting}) {
  const [data, setData] = useState([]);

  const {category} = useParams()

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(()=>{
          resolve(closeth)
      },3000)
    });

    if (category) {
      getData.then(res => setData(res.filter(closeth => closeth.categoria === category)))

    }else{
      getData.then(res => setData(res))

    }

  },[category])

  return (
    <div className="container  mt-5 ">
      <div className="row  justify-content-evenly">
        <ItemList data={data}/>
      </div>
    </div>
  );
}

export default ItemListContainer;