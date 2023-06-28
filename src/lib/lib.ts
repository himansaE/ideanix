/* eslint-disable @typescript-eslint/no-explicit-any */
export function cssClasses(...args: string[]) {
  return args.join(" ");
}

export function joinObject<T>(arg1: T, arg2: Partial<T>) {
  return { ...arg1, ...arg2 };
}
export function deepCopy<T>(obj: T) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copiedObj: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }

  return copiedObj as T;
}

export const hasEmptyValues = (obj: any): boolean => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value === null || value === undefined || value === "") {
        return true; // Found an empty value
      }
    }
  }
  return false; // No empty values found
};
export const generateRandomToken = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    token += characters.charAt(randomIndex);
  }

  return token;
};
