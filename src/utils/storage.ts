export const getValue = async (key:string) =>
  await figma.clientStorage.getAsync;

export const setValue = async (key:string, value: any) =>
  await figma.clientStorage.setAsync;