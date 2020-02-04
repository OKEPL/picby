import React from 'react';

interface IntroductionContext {
  contentText: string;
  contentText2: string;
  title: string;
  title2: string;
}
const contentText = `aplikacji budującej język ${'\n'} w umyśle dziecka,${'\n'} a także uczącącej komunikacji.`;
const contentText2 = `Dodawaj zdjęcia i nagrania głosowe,${'\n'} twórz opisy, przesyłaj pliki,${'\n'} komponuj albumy${'\n'} pełne wyjątkowych wspomnień!`;
const title = 'WITAJ W';
const title2 = 'POZNAJ';

export const IntroductionContext = React.createContext<IntroductionContext>({
  contentText,
  contentText2,
  title,
  title2,
});

const IntroductionContextProvider: React.FC = ({children}) => {
  return (
    <IntroductionContext.Provider
      value={{contentText, contentText2, title, title2}}>
      {children}
    </IntroductionContext.Provider>
  );
};

export default IntroductionContextProvider;
