const Hint =() => {
    return(
        <main className="hint container">
            <div className="hint-content">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>CHOOSE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES AND ACCESSORIES</p>
            
                <div className="hint-btn">
                   <button>SHOP NOW</button>
                   <button className="secondary-btn">CATEGORY</button>
                </div>
                <div className="shopping">
                   <p>ALSO AVAILABLE ON</p>
                   <div className="brand-icons">
                       <img src="\images\amazon.png" alt="amazon" />
                       <img src="\images\flipkart.png" alt="flipkart" />

                   </div>
                </div>
            </div>    
            

            <div className="hint-image">
            <img src="\images\shoe.png" alt="shoe" />
            </div>    
        </main>
    );
};

export default Hint;