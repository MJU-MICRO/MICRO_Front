import Header from 'component/Header';
import Notice from './Notice';
import Board from './Board';
import { ApplicationContainer } from './ApplicationStyles';

function Application() {
  return (
    <div>
      <Header />
      <ApplicationContainer>
        <Notice />
        <Board />
      </ApplicationContainer>
    </div>
  );
}

export default Application;
