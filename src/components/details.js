import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation()
    const {state} = location
    return(
        <div className="detailscontainer">
        <h1 className="country">{state.country}</h1>
        <div className="subcontainer">
        <div className="continent">
        <p>continent</p>
        <p>{state.continent}</p>
        </div>
        <div className="continent">
        <p>cases</p>
        <p>{state.cases.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>todayCases</p> 
        <p>{state.todayCases.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>todayDeaths</p>
        <p>{state.todayDeaths.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>recovered</p>
        <p>{state.recovered.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>todayRecovered</p>
        <p>{state.todayRecovered.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>active</p>
        <p>{state.active.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>critical</p>
        <p>{state.critical.toLocaleString()}</p>
        </div>
        <div className="continent">
        <p>population</p>
        <p>{state.population.toLocaleString()}</p>
        </div>
        </div>
        </div>
    )
}

export default Details;