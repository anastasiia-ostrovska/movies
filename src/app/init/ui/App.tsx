import { useAppSelector } from '@/shared/model';
import { selectToken } from '@/entities/session';
import { Routing } from '@/app/routing';

function App() {
  const token = useAppSelector(selectToken);

  return <Routing isAuth={!!token} />;
}

export default App;
