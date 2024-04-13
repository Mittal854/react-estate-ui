import './homePage.css'

function HomePage(){
    return(
        <div className='homePage'>
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate &  Get Your Dream PLace
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Tempore architecto qui asperiores ut numquam iusto at 
                        molestias odio sunt corrupti accusamus saepe nam eos excepturi 
                        deserunt quaerat, magnam doloribus provident!
                    </p>
                    {/* <SearchBar/> */}
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="imgcontainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage