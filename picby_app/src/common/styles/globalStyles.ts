import {StyleSheet, Dimensions} from 'react-native';

const {width: vw, height: vh} = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenWrapper: {
    alignItems: 'center',
  },
  popUp: {
    backgroundColor: '#074782',
    color: 'white',
    width: 0.95 * vw,
    paddingHorizontal: 0.0312 * vw,
    paddingVertical: 0.02 * vw,
    position: 'absolute',
    top: 0.84 * vh,
    borderRadius: 2,
    textAlign: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  popUpHidden: {
    display: 'none',
  },
  popUpText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  errorTextWrapper: {
    marginTop: 3,
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    marginBottom: 10,
    minHeight: 0.0625 * vw,
    paddingHorizontal: 2,
  },
  errorExlamationMark: {
    maxWidth: 0.0625 * vw,
    maxHeight: 0.0625 * vw,
    marginRight: 0.063 * vw,
  },
  errorText: {
    color: '#CC1919',
    letterSpacing: 0.3,
    fontSize: 14,
  },
  emailLogo: {
    width: 0.0625 * vw,
    marginRight: 0.0062 * vw,
    height: 0.05 * vw,
  },
  keyLogo: {
    width: 0.0687 * vw,
    height: 0.0375 * vw,
  },
  input: {
    paddingLeft: 0.053 * vw,
    width: 0.72 * vw,
    margin: 0,
    padding: 0,
    letterSpacing: 0.3,
    fontSize: 16,
    color: 'rgba(7, 71, 130, 0.68)',
  },
});
