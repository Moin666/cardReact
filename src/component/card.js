import Button from "../common/button"


function Card ({urlImg, title, description, price, alerPop, itemClick }){  

  
    return (<div className="border w-25 p-3">
                <img  className="w-75 rounded"   src= {urlImg}></img>
                <p className=" fw-bold">{title}<br/>{description}</p>
                <p>{price}</p>
                <Button alerPop ={alerPop} itemClick = {itemClick}/>
    </div>)
}

export default Card 