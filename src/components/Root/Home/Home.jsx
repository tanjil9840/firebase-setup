import { createContext, useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

 export  const homeContext= createContext(null)
const Home = (data) => {
    const [homeData , setHomeData]=useState ("from home");

  


    const user = useContext(AuthContext)
    console.log(user)


    
    return (
        <div className="flex  justify-center items-center h-screen" >
           
           <homeContext.Provider value={homeData} > 
           {
                data.children
             }

            
             </homeContext.Provider>
            
        </div>
    );
};

export default Home;