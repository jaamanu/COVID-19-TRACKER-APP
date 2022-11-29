import { fetchApi } from "../redux/api/api";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect } from "react";


const Homepage = () => {
    const Dispatch = useDispatch()
    const {tracker, status} = useSelector((state) => state.covidTracker)
    useEffect(() => {
        if(status === null){
            Dispatch(fetchApi())
        }
    })
    return(
       <div>
        {tracker.map((numbers) => (
        <h1>{numbers.country}</h1>
        ))}
       </div>
    )
}

export default Homepage;