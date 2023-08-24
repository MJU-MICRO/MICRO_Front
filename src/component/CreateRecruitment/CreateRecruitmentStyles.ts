import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import '../../../src/App.css';
import calender_icon from '../../assets/calendar-star.svg';
import scrollbar2 from '../../assets/scrollbar2.svg';
export const RecruitmentContainer = styled.div`
  width: 35rem;
  height: auto
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.7rem;
`;

export const InfoContainer = styled.div`
  width: 26.625rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const GroupContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 0.5px solid #dddddd;
`;

export const BasicNoticeTitle = styled.span`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: GmarketSansMedium;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const BasicNoticeText = styled(BasicNoticeTitle)`
  text-align: left;
  vertical-align: middle;
  font-size: 14px;
  font-family: 'GmarketSansMedium';
  line-height: auto;
  color: #000000;
  margin-bottom: 6px;
`;

export const RedAsterisk = styled(BasicNoticeText)`
  color: red;
`;

export const TextContainer = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
`;

export const GroupName = styled.span`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: GmarketSansMedium;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LogoImage = styled.img`
  border-radius: 10px;
  height: 120px;
  width: 120px;
  margin-right: 11px;
`;

export const GroupLargeCategory = styled.span`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-left: 0.5rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.3rem;
`;

export const GroupCategories = styled.span`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  border-radius: 3rem;
  margin-right: 0.4rem;
  padding: 0.3rem;
  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const GroupIntroduce = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.8);
  font-family: GmarketSansLight;
  font-size: 13.3px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0.4rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  outline: none;
  border: none;
  border-bottom: 0.5px solid #dddddd;
`;

export const ContentInput = styled.textarea`
  width: 34.8125rem;
  height: 5.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fafafa;
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  padding: 0.5rem;
  resize: none;
  outline: none;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
`;

export const ApplicationField = styled.span`
  min-width: 6rem;
  height: 2.0625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  margin-right: 1rem;
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
`;

export const RemoveButton = styled.svg`
  width: 1.59175rem;
  height: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  fill: black;
  fill-opacity: 0.9;
  vertical-align: middle;
`;

export const FieldInput = styled(TitleInput)`
  margin-top: 1rem;
`;

export const ActiveContentInput = styled(ContentInput)`
  width: 540px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dbdbdf;
  background: #fafafa;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 12px;
  resize: none;
  outline: none;
  position: relative;
  &::placeholder {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 0;
    color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;

export const ActivePeriodContainer = styled(FieldContainer)``;

export const ActivePeriodBtn = styled.button`
  width: 4.8125rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  margin-right: 1rem;
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  background-color: white;
  cursor: pointer;

  &.active {
    border-color: #32a9eb;
    color: #32a9eb;
  }
`;

export const DateContainer = styled(FieldContainer)``;

export const SelectedDate = styled(DatePicker)`
  width: 116px;
  color: rgba(0, 0, 0, 0.5);
  font-family: GmarketSansMedium;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9625rem;
  dateformat: yyyy-MM-dd;
  border: none;
  border-bottom: 1px solid #dbdbdf;
  background-image: url(${calender_icon});
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: right center;
  outline: none;
`;

export const DateText = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: GmarketSansMedium;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9625rem;
  margin-right: 15px;
  margin-left: 10px;
`;

export const DropzoneStyle = styled.div`
  width: 520px;
  height: 4.4375rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.2);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 0.625rem;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  background: #fafafa;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  margin-top: 1rem;
`;

export const ImageContainer = styled.div`
  margin-top: 1.3rem;
  overflow-x: auto;
  display: flex;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    height: 4px; /* Set width of the new custom scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    background-image: url(${scrollbar2});
    background-repeat: no-repeat;
    background-size: 134px 3px;
    border-radius: 2px; /* Rounded corners for the thumb */
  }
`;

export const RecruitmentContainer2 = styled(RecruitmentContainer)`
  padding-bottom: 1rem;
  border-bottom: 1px solid #dbdbdf;
`;

export const BasicNoticeTextLight = styled(BasicNoticeText)`
  font-family: GmarketSansLight;
`;

// 페이지2
export const QustionContainer = styled.div`
  width: 34.8125rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3125rem;
  border-top: 0.1px solid #32a9eb;
  border-right: 0.1px solid #32a9eb;
  border-bottom: 0.1px solid #32a9eb;
  border-left: 5px solid #32a9eb;
  padding: 0.7rem;
  margin-bottom: 13px;
`;

export const QuestionTitleInput = styled(TitleInput)`
  width: 22.50019rem;
  outline: none;
`;

export const InnerContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionSelect = styled.select`
  width: 8.25rem;
  height: 2.0625rem;
  border-radius: 0.3125rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.6);
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const QuestionTitle = styled.span`
  width: 22.50019rem;
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border: none;
  border-bottom: 0.5px solid #dddddd;
`;

export const QuestionAddBtn = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 4px;
`;
