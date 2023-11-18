import classNames from "classnames";
import { HTMLAttributes } from "react";

const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <div className={classNames("container", className)} {...props}>
        {props.children}
    </div>;
};

export default Container;