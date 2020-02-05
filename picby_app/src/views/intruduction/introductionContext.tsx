import React, {useState} from 'react';

export interface IntroductionProps {
  contentText: string;
  contentText2: string;
  title: string;
  title2: string;
  activeScreenNumber: number;
  setActiveScreenNumber: any;
}
const contentText = `aplikacji budującej język ${'\n'} w umyśle dziecka,${'\n'} a także uczącącej komunikacji.`;
const contentText2 = `Dodawaj zdjęcia i nagrania głosowe,${'\n'} twórz opisy, przesyłaj pliki,${'\n'} komponuj albumy${'\n'} pełne wyjątkowych wspomnień!`;
const title = 'WITAJ W';
const title2 = 'POZNAJ';

export const IntroductionContext = React.createContext<IntroductionProps>({
  contentText,
  contentText2,
  title,
  title2,
  activeScreenNumber: 1,
  setActiveScreenNumber: null,
});

const IntroductionContextProvider: React.FC = ({children}) => {
  const [activeScreenNumber, setActiveScreenNumber] = useState(1);
  return (
    <IntroductionContext.Provider
      value={{
        contentText,
        contentText2,
        title,
        title2,
        activeScreenNumber,
        setActiveScreenNumber,
      }}>
      {children}
    </IntroductionContext.Provider>
  );
};

export default IntroductionContextProvider;
