import { Navigate } from "react-router-dom";


const NOT_FOUND = () => {

    return (
        <Navigate to="/" replace />
    );
};

export default NOT_FOUND;