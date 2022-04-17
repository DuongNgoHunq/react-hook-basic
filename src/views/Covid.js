
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () =>{

    // const today = new Date(new Date().setHours(0,0,0,0));
    const today = moment().startOf('day').toISOString(true);; 
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true); 

    const {data: dataCovid, isLoading, isError} = 
    
    useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true);
    // useFetch('https://api.covid19api.com/country/vietnam?from=2022-03-01T00:00:00Z&to=2022-03-16T00:00:00Z');
    
    //
  
    return(
        <div >
             <h3>Checking Covid In Việt Nam</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
                
            </thead>

            <tbody>
                
                {!isError && !isLoading && dataCovid && dataCovid.length > 0 &&
                    dataCovid.map(item =>{
                        return(
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Active}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })
                    
                }
                {isLoading && 
                    <tr>
                        <td colSpan="5" style={{'textAlign': 'center'}}>
                            Loading...
                        </td>
                    </tr>

                }

                {isError && 
                    <tr>
                        <td colSpan="5" style={{'textAlign': 'center'}}>
                            Something Wrong...
                        </td>
                    </tr>

                }
            </tbody>

        </table>
        </div>
       
    )
}
export default Covid;