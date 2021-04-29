export const getValue = async <T = string> (key:string):Promise<T> =>
  figma.clientStorage.getAsync(key);

export const setValue = <T = string> (key:string, value: any) =>
  figma.clientStorage.setAsync(key, value);