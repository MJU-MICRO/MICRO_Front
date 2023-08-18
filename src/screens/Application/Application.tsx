import Header from 'components/header/Header';
import Notice from 'components/application/Notice';
import Board from 'components/application/Board';
import { ApplicationContainer } from 'components/application/ApplicationStyles';

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
