import { Navigation } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;

  setTimeout(() => {
    Navigation.navigate({
      moduleName: 'main-page',
      clearHistory: true,
    });
  }, 2000); // 2 seconds delay
}
