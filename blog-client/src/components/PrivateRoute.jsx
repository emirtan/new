import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthToken } from "../store/auth/hooks"

const PrivateRoute = ({ children }) => {
  const token = useAuthToken();
  const navigate = useNavigate()

  useEffect(() => {
      if (!token) {
          navigate('/giris-yap', {
              replace: true
          })
      }
  }, [token]);

  return children
};

export default PrivateRoute;