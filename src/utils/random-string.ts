export const randomString = (length:number = 5) => 
  Math.random().toString(36).substring(1, length);

export default randomString;