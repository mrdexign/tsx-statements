import { FC } from 'react';
export declare const isNodeID: (node: any, ...ids: string[]) => string | undefined;
declare type IfProps = {
    condition?: boolean;
    csID?: string;
};
export declare const If: FC<IfProps>;
declare type ElseProps = {
    csID?: string;
};
export declare const Else: FC<ElseProps>;
declare type WhenProps = {
    condition?: boolean;
    csID?: string;
};
export declare const When: FC<WhenProps>;
declare type OtherWiseProps = {
    csID?: string;
};
export declare const OtherWise: FC<OtherWiseProps>;
export declare const Select: FC;
export {};
