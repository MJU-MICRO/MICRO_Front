import styled from 'styled-components';

export const Container = styled.h1`
  width: 41.188rem;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 42px;
  margin-right: 18px;
`;

export const NoticeTitle = styled.h1`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: 'GmarketSansMedium';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 13px;
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: left;
  margin-bottom: 15px;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
`;

export const NoticeText = styled.p`
  display: flex;
  align-items: left;
  margin-bottom: 7px;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
  img {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-right: 5px;
  }
`;

export const SaveButton = styled.button`
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
  line-height: 41px;
  width: 104px;
  height: 40px;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid rgba(41, 180, 72, 0.7);
  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    color: #358e48;
  }
`;

export const SmallTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 2px;
`;

export const Title = styled.div`
  margin-top: 30px;
  margin-left: 36px;
  font-size: 16px;
  margin-bottom: 25px;
`;

export const BasicInfoAsterisk = styled.span`
  color: red;
`;

export const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 570px;
  flex-shrink: 0;
  margin-left: 36px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
  margin-top: 6px;
  margin-bottom: 25px;
`;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    borderRadius: '10px',
    background: provided.background,
    cursor: 'pointer'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
};

export const MultiCustomStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    border: 'none',
    background: provided.background,
    cursor: 'pointer'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }),
  multiValue: (base: any, state: any) => ({
    ...base,
    borderRadius: '10px',
    border: '0.8px solid #858585',
    background: 'rgba(255, 255, 255, 0.05)'
  }),
  multiValueLabel: (base: any, state: any) => ({
    ...base,
    color: 'rgba(0, 0, 0, 0.95)', // 선택된 태그 텍스트 색상 변경
    fontFamily: 'GmarketSansMedium'
  })
};

export const BasicInput = styled.input`
  width: 600px;
  height: 16px;
  padding: 0px;
  flex-shrink: 0;
  border: none;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 0px;
  margin-top: 10px;
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const Level = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 31px;
  margin-right: 650px;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
export const Next = styled.div`
  display: flex;
  align-items: left;
  height: auto;
  justify-content: space-around;
  margin-bottom: 2rem;
`;
