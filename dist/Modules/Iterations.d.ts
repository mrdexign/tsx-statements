import { ReactNode } from 'react';
declare type MapProps<T> = {
    items?: T[];
    filter?: (item: T, index?: number) => boolean;
    children: (item: T, index?: number) => ReactNode;
};
export declare const Map: <T extends unknown>({ items, filter, children }: MapProps<T>) => JSX.Element;
export {};
