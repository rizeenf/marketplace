import { useState, useEffect } from "react";
import { axiosRequest } from "../axiosRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const res = await axiosRequest.get(url);
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        setError(true);
        console.error(error);
      }

      setLoading(false);
    };

    fetchApi();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
