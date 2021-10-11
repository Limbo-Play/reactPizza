import React from 'react'
import './loadingAnimation.css'





function LoadingAnimation() {
    

    return (
            <div className="containerPosition">
                <div className="loadingPosition">
                    <img className="logoLoading" src="Logo.png" alt="Loading" />
                    <span className="loadingSpan">Loading...</span>
                </div>
            </div>   
        )
    
}

export default LoadingAnimation