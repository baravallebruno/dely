import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

/**
 * Type-safe Object.keys for TypeScript
 *
 * @param obj
 * @returns Typed array of keys
 */
const objectKeys = <T extends object>(obj: T): (keyof T)[] => {
    return Object.keys(obj) as (keyof T)[];
};

export { cn, objectKeys };
