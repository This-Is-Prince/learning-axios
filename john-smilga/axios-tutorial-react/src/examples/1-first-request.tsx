import { useEffect, useState } from "react";
import axios from "axios";

// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [names, setNames] = useState<{ id: string; name: string }[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
      setNames(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">first request</h2>
      {names.map(({ id, name }) => {
        return (
          <h5 key={id} className="text-center">
            {name}
          </h5>
        );
      })}
    </div>
  );
};
export default FirstRequest;
