import React, { HTMLAttributes } from 'react';
interface ContainerProps extends HTMLAttributes<HTMLElement> {
    color?: string;
    indent?: string;
    resize?: 'both' | 'horizontal' | 'vertical' | 'none';
    size?: string;
}
export declare const Container: React.FC<ContainerProps>;
export {};
//# sourceMappingURL=Container.d.ts.map