import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Products = () => {
  const [data, setdata] = useState([]);

  const allData = async () => {
    try {
      const data = collection(db, "users");
      const allData = await getDocs(data);

      const main = [];

      allData.forEach((docs) => {
        const data = docs.data();
        main.push(data);
        setdata(main)
        
      });
      console.log(main);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.date.seconds}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
