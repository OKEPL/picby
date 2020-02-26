import {NavigationRoute, NavigationParams} from 'react-navigation';

export const omitNavItems: (
  navItems: NavigationRoute<NavigationParams>[],
  omitNavKey: String,
) => NavigationRoute<NavigationParams>[] = (navItems, omitNavKey) => {
  return navItems.filter(navItem => navItem.key !== omitNavKey);
};
