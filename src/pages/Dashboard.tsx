import React, { useContext } from 'react';
import { AuthContext } from '../components/Auth';

// import { User } from '../datatypes/User';
import { useHistory } from 'react-router-dom';
import Layout from '../components/layout';

const Dashboard: React.FC = () => {
  const history = useHistory();

  // const handleLogout = () => {
  //   history.push(`/`);
  // };
  // let { currentUser } = useContext<Partial<User>>(AuthContext);
  return <Layout></Layout>;
};

export default Dashboard;
