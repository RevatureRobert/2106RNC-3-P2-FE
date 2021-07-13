import {Redirect, Route} from "react-router-dom";

interface IProps {
    component: React.ComponentType;
    path: string;
    [propName: string]: any;
}

const PublicRoute: React.FC<IProps> = ({
    component: Component,
    path,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props: any) => {
                return <Redirect to="/" />;
            }}
        />
    );
};

export default PublicRoute;
