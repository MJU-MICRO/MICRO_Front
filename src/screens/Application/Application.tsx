import Header from 'component/Header/Header';
import Notice from 'component/Application/Notice';
import Board from 'component/Application/Board';
import { ApplicationContainer } from 'component/Application/ApplicationStyles';

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
