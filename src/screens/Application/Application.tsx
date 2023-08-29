import Header from 'component/Header/Header';
import Notice from 'component/Application/Notice';
import Board from 'component/Application/Board';
import { ApplicationContainer } from 'component/Application/ApplicationStyles';
import { useLocation } from 'react-router-dom';

function Application() {
  const location = useLocation();
  const recruitmentId = location.state;
  return (
    <div>
      <Header />
      <ApplicationContainer>
        <Notice />
        <Board recruitmentId={recruitmentId} />
      </ApplicationContainer>
    </div>
  );
}

export default Application;
