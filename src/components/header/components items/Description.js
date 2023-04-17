const Description = (props) =>{
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <div>
            <span className="descriptionTitle"></span>
                <p className="parrafo">
                    {props.parrafo}
                </p>
            </div>

            <span className="cant">
                cantidad: {props.cantidad}
            </span>

            <span className="precio">
                {props.precio}
            </span>
        </div>
    )
}

export default Description;