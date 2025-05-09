import { createContext, ReactElement, RefObject, useState } from 'react';

export type ContextData = {
  primaryColor: string;
  setPrimaryColor: (value: string) => void;
  secondaryColor: string;
  setSecondaryColor: (value: string) => void;
  selectedDesign: string | null;
  setSelectedDesign: (value: string) => void;
  svgRef?: RefObject<SVGSVGElement>;
  setSvgRef: (svgRef: RefObject<SVGSVGElement>) => void;
};

const initialState = {
  primaryColor: '#8FCF6C',
  setPrimaryColor: () => {},
  secondaryColor: '#495057',
  setSecondaryColor: () => {},
  selectedDesign: null,
  setSelectedDesign: () => {},
  setSvgRef: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextData>(initialState);

const ContextProvider = ({ children }: { children: ReactElement }) => {
  const [primaryColor, setPrimaryColor] = useState<string>(
    initialState.primaryColor
  );
  const [secondaryColor, setSecondaryColor] = useState<string>(
    initialState.secondaryColor
  );
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [svgRef, setSvgRef] = useState<RefObject<SVGSVGElement>>();

  const ContextDataValue: ContextData = {
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    selectedDesign,
    setSelectedDesign,
    svgRef,
    setSvgRef,
  };

  return (
    <Context.Provider value={ContextDataValue}>{children}</Context.Provider>
  );
};

export default ContextProvider;
