function Button ({alerPop, itemClick}){
    return(<button className="btn btn-primary btn-sm" onClick={()=> {alerPop(itemClick)}}>Add To Card</button>)
}

export default Button