import { useQuery } from '@apollo/client';
import auth from '../utils/auth';

import ProfileDisplayer from './ProfileDisplayer';
import { QUERY_USER } from '../utils/queries';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });

  if (loading) return <h1>Loading...</h1>;
  return <ProfileDisplayer user={data.me} />;
};
export default Profile;
