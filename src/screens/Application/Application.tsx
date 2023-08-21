import Header from 'components/Header/Header';
import Notice from 'components/Application/Notice';
import Board from 'components/Application/Board';
import { ApplicationContainer } from 'components/Application/ApplicationStyles';

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
