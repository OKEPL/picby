import React, {useState} from 'react';

export interface IntroductionProps {
  firstScreenContentText: string;
  secondScreenContentText: string;
  firstScreenTitle: string;
  secondScreenTitle: string;
  thirdScreenTitle: string;
  activeScreenNumber: number;
  setActiveScreenNumber: any;
}
const firstScreenContentText = `aplikacji budującej język ${'\n'} w umyśle dziecka,${'\n'} a także uczącącej komunikacji.`;
const secondScreenContentText = `Dodawaj zdjęcia i nagrania głosowe,${'\n'} twórz opisy, przesyłaj pliki,${'\n'} komponuj albumy${'\n'} pełne wyjątkowych wspomnień!`;
const firstScreenTitle = 'WITAJ W';
const secondScreenTitle = 'POZNAJ';
const thirdScreenTitle = 'ŚWIAT OCZAMI DZIECKA';

export const IntroductionContext = React.createContext<IntroductionProps>({
  firstScreenContentText,
  secondScreenContentText,
  firstScreenTitle,
  secondScreenTitle,
  thirdScreenTitle,
  activeScreenNumber: 1,
  setActiveScreenNumber: null,
});

const IntroductionContextProvider: React.FC = ({children}) => {
  const [activeScreenNumber, setActiveScreenNumber] = useState(1);
  return (
    <IntroductionContext.Provider
      value={{
        firstScreenContentText,
        secondScreenContentText,
        firstScreenTitle,
        secondScreenTitle,
        thirdScreenTitle,
        activeScreenNumber,
        setActiveScreenNumber,
      }}>
      {children}
    </IntroductionContext.Provider>
  );
};

export default IntroductionContextProvider;
