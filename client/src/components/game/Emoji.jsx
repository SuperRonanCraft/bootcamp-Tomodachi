import Lottie from 'lottie-react';
import happy from '../../assets/happy.json';

export default function Emoji() {
  return (
    <div className="border rounded-md">
      <Lottie animationData={happy} />
    </div>
  );
}
