import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import useAuth from 'src/hooks/useAuth';

interface GuestProps {
  children: ReactNode;
}

const Guest: FC<GuestProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/extended-sidebar/dashboards/reports" />;
  }

  return <>{children}</>;
};

Guest.propTypes = {
  children: PropTypes.node
};

export default Guest;
