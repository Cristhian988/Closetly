import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useFetch<T>(url: string) {
  const [products, setProducts] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Something went wrong")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { products, loading, error, navigate };
}
