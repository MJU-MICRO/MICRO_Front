import styled from 'styled-components';
import '../../../App.css';

export const CardContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  float: left;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  border-radius: 10px;
  width: 139px;
  height: 135px;
  margin-top: 22px;
  margin-left: 17px;
  margin-right: 11px;
`;

export const CardInfo = styled.div`
  float: right;
  h3 {
    width: 86px;
    margin-top: 31px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    color: #000;
    margin-top: 6px;
    margin-bottom: 7px;
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansLight';
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const SecondWrapper = styled.div`
  float: left;
  display: flex;
  align-items: center;
`;

export const Large = styled.span`
  margin-top: 31px;
  font-family: 'GmarketSansLight';
  color: rgba(0, 0, 0, 0.8);
  text-edge: cap;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;

interface ActivePeriodProps {
  activePeriod: string; // 또는 해당 타입에 맞게 수정
}

export const ActivePeriod = styled.div<ActivePeriodProps>`
  width: 59px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ activePeriod }) =>
    activePeriod === '1년 활동'
      ? 'rgba(113, 69, 148, 0.10)'
      : 'rgba(92, 163, 95, 0.10)'};
  color: ${({ activePeriod }) =>
    activePeriod === '1년 활동' ? '#714594' : '#49A24D'};

  leading-trim: both;
  text-edge: cap;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 29.5px;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  font-family: 'GmarketSansMedium';
  margin-left: auto;
`;

export const Title = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 14px;
  font-family: 'GmarketSansMedium';
  line-height: auto;
  color: #000000;
  margin-bottom: 6px;
`;

export const Details = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 14px;
  font-family: 'GmarketSansLight';
  line-height: auto;
  color: #000000;
  margin-right: 13px;
  margin-top: 17px;
`;

interface StatusProps {
  isRecruit: boolean;
}

export const OrganizationName = styled.span`
  margin-top: 31px;
  font-family: 'GmarketSansMedium';
  color: rgba(0, 0, 0, 0.8);
  text-edge: cap;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Status = styled.span<StatusProps>`
  height: 27px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) =>
    props.isRecruit ? 'rgba(255, 122, 122, 0.1)' : 'rgba(118, 118, 118, 0.10)'};
  color: ${(props) => (props.isRecruit ? '#ff4141' : '#747474')};
  leading-trim: both;
  text-edge: cap;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 29.5px;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  font-family: 'GmarketSansMedium';
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 10px;
`;

export const InterestTag = styled.span`
  position: relative;
  margin-right: 7px;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #dbdbdf;
  font-family: 'GmarketSansLight';
  font-size: 8.3px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 5.5px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 600px;
  margin-top: 5px;
`;

export const UpWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 755px;
  flex-shrink: 0;
  margin-left: 20px;
  margin-right: 8px;
  margin-top: 20px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
`;
