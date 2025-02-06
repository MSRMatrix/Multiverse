import "./loadingComponent.css"

const LoadingComponent = ({text}) => {
    return(
        <div className="loading-container">
            <div className="loading-header">
           <h2>{text} Please wait and get some</h2><i className="fa-solid fa-mug-hot"></i>     
            </div>
            <div className="loading-icon">
            <i className="fa-solid fa-circle-notch"></i>    
            </div>
            
            </div>
    )
}

export default LoadingComponent;