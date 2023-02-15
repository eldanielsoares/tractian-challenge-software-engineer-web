import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { container, Registry } from "@/@core/shared/container-registry";
import { OverviewUsecase } from "@/@core/usecases/overview/application/overview-usecase";
import { Overview } from "@/@core/usecases/overview/domain/entities/overview";

export type OverviewContextType = {
  overview: Overview;
};

const defaultContext: OverviewContextType = {
  overview: new Overview({} as Overview),
};

export const OverviewContext = createContext(defaultContext);

const overviewUsecase = container.get<OverviewUsecase>(
  Registry.OverviewUsecase
);

interface ContextProps {
  children: ReactNode;
}

export const OverviewProvider: React.FC<ContextProps> = ({ children }) => {
  const [overview, setOverview] = useState<Overview>(defaultContext.overview);

  const getOverview = useCallback(async () => {
    const overview = await overviewUsecase.execute();
    setOverview(overview);
  }, []);

  useEffect(() => {
    getOverview();
  }, [getOverview]);

  return (
    <OverviewContext.Provider value={{ overview }}>
      {children}
    </OverviewContext.Provider>
  );
};
export const useOverview = () => useContext(OverviewContext);
