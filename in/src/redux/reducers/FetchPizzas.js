import React, { useEffect, useState } from 'react';


function FetchPizzas() {
const [pizzas, setPizzas] = useState([])
    const BASE_URL = "https://q8zbks9a4l.execute-api.eu-central-1.amazonaws.com/Prod"
    const token = "OwekZi1fkt3VlmA7r20fv6m4jAVLDh6iaF5C41al"

    useEffect(() => {
        fetchPizzas()
    }, [])

    async function fetchPizzas() {
        const response = await fetch(BASE_URL + "/pizzas", {
            headers: {
                'x-api-key': token,
            },
        })

        const data = await response.json()
      setPizzas(data)
  }
  console.log(pizzas)
  
    
  return (
    <div>
    </div>
  );
}

export default FetchPizzas;