import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Navigate, useParams } from 'react-router-dom';
import ProfileDisplayer from './ProfileDisplayer';
import auth from '../utils/auth';

const ProfileUser = () => {
  const { userId } = useParams();
  if (auth.loggedIn() && userId === auth.getProfile().data._id)
    return <Navigate to={'/profile'} />;

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  if (loading) return <h1>Loading...</h1>;
  return <ProfileDisplayer user={data.me} />;
};
export default ProfileUser;
