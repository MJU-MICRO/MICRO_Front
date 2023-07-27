import styled from 'styled-components';
import '../../App.css';

export const CardContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  float: left;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  border-radius: 10px;
  height: 79px;
  width: 86px;
  margin-top: 22px;
  margin-left: 17px;
`;

export const CardInfo = styled.div`
  float: right;
  margin-left: 11px;
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

export const Status = styled.div`
  width: 59px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 122, 122, 0.1);
  color: #ff4141;
  leading-trim: both;
  text-edge: cap;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 29.5px;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  margin-left: 115px;
  font-family: 'GmarketSansMedium';
`;

export const Details = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 14px;
  font-family: 'GmarketSansLight';
  line-height: auto;
  color: #000000;
  margin-left: 17px;
  margin-right: 13px;
  margin-bottom: 41px;
  margin-top: 17px;
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
  flex-direction: row;
`;

export const UpWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 362px;
  flex-shrink: 0;
  margin-left: 17px;
  margin-right: 8px;
  margin-top: 20px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
`;
