import { Button } from '@/components/ui';
import zaza from '../assets/zaza_cat.jpg';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="container my-4">
      <div className="flex justify-center items-center gap-4">
        <h1 className="font-extrabold text-5xl">Hi</h1>
        <Button variant={'secondary'} onClick={() => navigate(-1)}>
          Return
        </Button>
      </div>
      <img className="m-auto" src={zaza} alt="Zaza Cat" />
    </div>
  );
};

export default Main;
