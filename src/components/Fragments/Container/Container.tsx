import classNames from "classnames";
import { HTMLAttributes } from "react";

const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <div className={classNames("container px-4 sm:px-3 2xl:px-0", className)} {...props}>
        {props.children}
    </div>;
};

export default Container;