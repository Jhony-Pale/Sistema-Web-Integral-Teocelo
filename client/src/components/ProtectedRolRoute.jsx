import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRolRoute({ rolRoute }) {
    const {loading, user} = useAuth();

    if(loading) return <h1>Loading...</h1>
    if (!user && !user.rol === rolRoute) return <Navigate to="/" replace />;
  
    return <Outlet />;
}

export default ProtectedRolRoute