import { ReactNode } from "react";

type TContainerProps = {
    children: ReactNode,
}
const Container = ({ children }: TContainerProps) => {
    return (
        <div className="h-screen mx-auto max-w-7xl ">
            {children}
        </div>
    );
};

export default Container;