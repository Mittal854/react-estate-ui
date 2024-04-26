import './homePage.css'
import SearchBar from '../../components/searchbar/SearchBar'

function HomePage(){
    return(
        <>
        <div className='homePage'>
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate &  Get Your Dream Place
                    </h1>
                    <p>
                    Welcome to <b>HomeHaven</b>, where your dream home awaits! Discover a vast array of exquisite properties tailored to your lifestyle and preferences. Whether you're searching for a chic urban apartment or a sprawling countryside estate, we are here to guide you every step of the way. Start your journey towards finding the perfect home today!
                    </p>
                    <SearchBar/>
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
        
        <div className='heading1'>
            <h2 class="h1">The Most Rental Listings</h2>
            <p className='p1'>Choose from over 1 million apartments, houses, condos, and townhomes for rent.</p>
        </div>

        <div class="container">
            <div class="listing">
                <img src="https://media.istockphoto.com/id/510231606/photo/backpackers-looking-for-apartment-online.jpg?s=612x612&w=0&k=20&c=bzmOBqxu54XX3hmW-TfQQq7CBRg_IG3o3n3XT_No-go=" alt="" />
                <div class="details">
                    <h2>Renting made simple</h2>
                    <p>Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
                </div>
            </div>
        </div>
</>
    )
}

export default HomePage