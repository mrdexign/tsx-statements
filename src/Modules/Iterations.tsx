import { ReactNode } from 'react';

type MapProps<T> = {
	items?: T[];
	filter?: (item: T, index?: number) => boolean;
	children: (item: T, index?: number) => ReactNode;
};
export const Map = <T extends any>({ items, filter, children }: MapProps<T>) => {
	let data = items || [];
	if (filter) data = data?.filter?.(filter);
	return <>{data?.map(children)}</>;
};
