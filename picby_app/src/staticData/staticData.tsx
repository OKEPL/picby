export const registerMessages = {
  messageEmailAlreadyTaken: 'Konto o podanym e-mail już istnieje.',
  messageBadEmail: 'Wprowadź poprawny adres e-mail.',
  messagePasswordError: 'Hasło musi zawierać min. 8 znaków',
  messagePasswordNotSimilar: 'Podane hasła nie są identyczne.',
  messageRegisterSuccess: `Zarejestrowano pomyślnie,${'\n'}sprawdź skrzynkę pocztową.`,
  messageFieldRequired: 'To pole jest wymagane',
};

export const loginMessages = {
  messageEmailConfirmation: `E-mail został potwierdzony,${'\n'}możesz się zalogować.`,
  messageLoginSuccess: `Logowanie pomyślne,${'\n'} nastąpi przekierowanie`,
  messageBadPassword: 'Hasło jest nieprawidłowe',
  messageBadEmail: 'Wprowadź poprawny adres e-mail.',
  forgotPasswordText: 'Zapomniałeś hasła?',
};

export const forgotPasswordMessages = {
  messageBadMail: 'Wprowadź poprawny adres e-mail.',
  messageEmailNotFound: 'Podany adres e-mail nie istnieje w bazie',
  popUpText: `Przypomnienie zostało wysłane.${'\n'} Sprawdź skrzynkę odbiorczą.`,
  contentText: `Wprowadź swój adres e-mail ${'\n'} żeby zresetować hasło.`,
  contentHeader: 'ZAPOMNIAŁEŚ HASŁA?',
};

export const serverErrors = {
  serverError: 'Błąd serwera',
};

export const buttonsData = {
  registerText: 'Zarejestruj się',
  registerWithGoogle: 'Zarejestruj się z google',
  loginText: 'Zaloguj się',
  loginWithGoogle: 'Zaloguj się z google',
  sendText: 'Wyślij',
  goBackText: 'Wróć',
  textColorWhite: {color: 'white'},
  textColorBlue: {color: '#3180AE'},
  backgroundColorVariants: [
    ['#3180AE', '#074782'],
    ['rgba(255, 255, 255, 0.87)', 'rgba(255, 255, 255, 0.87)'],
    ['#FBB114', '#FBB114'],
  ],
};

export const inputData = {
  placeholderTextBlueColor: 'rgba(7, 71, 130, 0.68)',
};

export const introHeaderText = {
  registerHeaderTextTwo: 'Masz już konto? Doskonale!',
  loginHeaderTextTwo: 'Nie masz jeszcze konta?',
  registerHeaderTextOne: 'Zaloguj się',
  loginHeaderTextOne: 'Zarejestruj się',
};
