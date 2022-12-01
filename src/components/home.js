

const Homepage = ({country, cases}) => {
    
    return(
       <div className="">
        <div className="homeinfo">
            <h3>{country}</h3>
            <h3>{cases}</h3>
        </div>
       </div>
    )
}

export default Homepage;