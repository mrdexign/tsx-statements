import { FC, ReactNode, Children, Fragment } from 'react';

export const isNodeID = (node: any, ...ids: string[]) => {
	const str = node?.type?.toString();
	return ids?.find(id => /csID = '(.*)'/g.exec(str)?.[1] === id);
};

type IfProps = { condition?: boolean; csID?: string };
export const If: FC<IfProps> = ({ csID = '@CS-IF', condition, children }) => {
	const nodes = Children.toArray(children);

	const elseNodeIndex = nodes?.findIndex?.(node => isNodeID(node, '@CS-ELSE'));
	if (elseNodeIndex >= 0) {
		if (!condition) return <>{nodes?.[elseNodeIndex]}</>;
		else return <>{nodes?.splice?.(elseNodeIndex, 1) && nodes}</>;
	}

	return <Fragment key={csID}>{condition ? children : null}</Fragment>;
};

type ElseProps = { csID?: string };
export const Else: FC<ElseProps> = ({ csID = '@CS-ELSE', children }) => {
	return <Fragment key={csID}>{children}</Fragment>;
};

type WhenProps = { condition?: boolean; csID?: string };
export const When: FC<WhenProps> = ({ csID = '@CS-WHEN', condition, children }) => {
	return <Fragment key={csID}>{condition ? children : null}</Fragment>;
};

type OtherWiseProps = { csID?: string };
export const OtherWise: FC<OtherWiseProps> = ({ csID = '@CS-OTHERWISE', children }) => {
	return <Fragment key={csID}>{children}</Fragment>;
};

export const Select: FC = ({ children }) => {
	if (!children) return <></>;
	const returnNodes: ReactNode[] = [];
	const nodes = Children.toArray(children);

	for (let i = 0; i < nodes.length; i++) {
		const node: any = nodes?.[i];
		const isLast = i === nodes.length - 1;

		if (isNodeID(node, '@CS-WHEN', '@CS-IF')) {
			if (node?.props?.condition) return <>{node}</>;
		}

		if (isNodeID(node, '@CS-OTHERWISE', '@CS-ELSE')) {
			if (isLast && returnNodes?.length === 0) returnNodes.push(node);
		}
	}

	return <>{returnNodes}</>;
};
