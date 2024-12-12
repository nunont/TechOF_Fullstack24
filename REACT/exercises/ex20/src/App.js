import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchActivity = async () => {
      try {
        const response = await fetch(`https://bored.api.lewagon.com/api/activity`);
        console.log("response");
        console.log(response);
        const data = await response.json();
        setLoading(false);
        setData(data)
      } catch (error) {
        setLoading(false);
      }
    };
    fetchActivity();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h4>The activity:</h4>
          <p>{data?.activity}</p>
          <p>type: {data?.type}</p>
          <p>participants: {data?.participants}</p>
          <p>price: {data?.price} out of 1</p>
        </div>
      )}
    </>
  );
}
