export function cssClasses(...args: string[]) {
  return args.join(" ");
}

export function joinObject<T>(arg1: T, arg2: Partial<T>) {
  return { ...arg1, ...arg2 };
}
