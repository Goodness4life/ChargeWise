import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchRecommendations } from '../services/api';

export interface RecommendationItem {
  location: string;
  score: number;
  rank: number;
}

const fallbackRecommendations: RecommendationItem[] = [
  { location: 'Lekki', score: 92, rank: 1 },
  { location: 'Ikeja', score: 88, rank: 2 },
  { location: 'Yaba', score: 84, rank: 3 },
];

export const useFetchRecommendations = () => {
  const [data, setData] = useState<RecommendationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const mountedRef = useRef(true);

  const load = useCallback(async () => {
    setIsLoading(true);

    try {
      const payload = await fetchRecommendations();
      if (!mountedRef.current) return;
      if (Array.isArray(payload)) {
        setData(payload);
      } else {
        setData(fallbackRecommendations);
      }
    } catch {
      if (!mountedRef.current) return;
      setData(fallbackRecommendations);
    } finally {
      if (!mountedRef.current) return;
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    load();
    return () => {
      mountedRef.current = false;
    };
  }, [load]);

  const refresh = async () => {
    await load();
  };

  return { data, isLoading, refresh };
};
