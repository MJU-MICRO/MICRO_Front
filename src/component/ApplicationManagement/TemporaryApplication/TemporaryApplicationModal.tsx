import { UserSentApplicationProps } from '../../../interfaces/UserSentApplicationProps';
import BasicInfo from '../ApplicationCommon/BasicInfo';
import TextareaContainer from '../../../component/Application/TextareaContainer';
import { RecruitmentProps } from '../../../component/recruitment/RecruitmentProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ApplicationModal from '../ApplicationCommon/ApplicationModal';
import Buttons from '../../../component/Application/Buttons';
import axios from 'axios';

const TemporaryApplicationModal = ({
  isOpen,
  onClose,
  userInfo,
  applicationRecruitment,
  group
}) => {
  const selectedApplication = applicationRecruitment[0].application;
  const selectedRecruitment = applicationRecruitment[0].recruitment;
  console.log('tpffprxl', selectedApplication);

  const [fields, setFields] = useState<string[]>(
    selectedRecruitment.applicationFields
      ? selectedRecruitment.applicationFields
      : []
  );
  const [questions, setQuestions] = useState<string[]>(
    selectedRecruitment.questions || []
  );
  const [answer, setAnswer] = useState<string[]>(
    selectedApplication.answers || []
  );
  const [characterLimit, setCharacterLimit] = useState<number[]>(
    selectedRecruitment.characterLimit || []
  );
  const [supportField, setSupportField] = useState<string>(
    selectedApplication.supportField || ''
  );
  const [recruitementData, setRecruitementData] =
    useState<RecruitmentProps | null>(null);
  const [application, setApplication] = useState<UserSentApplicationProps>({
    id: selectedApplication.id,
    userId: selectedApplication.userId,
    recruitmentId: selectedApplication.recruitmentId,
    answer: selectedApplication.answers || [''],
    supportField: selectedApplication.supportField || '',
    grade: selectedApplication.grade || '1',
    isAttending:
      selectedApplication.isAttending !== undefined
        ? selectedApplication.isAttending
        : true,
    isSubmit: false
  });
  const [isAttending, setIsAttending] = useState<boolean>(
    selectedApplication.isAttending || ''
  );

  useEffect(() => {
    setFields(selectedRecruitment.applicationFields || []);
    setQuestions(selectedRecruitment.questions || []);
    setAnswer(selectedApplication.answers || []);
    setCharacterLimit(selectedRecruitment.characterLimit || []);
    setSupportField(selectedApplication.supportField || '');
    setRecruitementData(selectedRecruitment);
    setIsAttending(
      selectedApplication.isAttending !== undefined
        ? selectedApplication.isAttending
        : true
    );
    console.log('모달창 거 ', applicationRecruitment);
    console.log('모달창 거 ', applicationRecruitment[0].application);
    console.log('대답..', selectedApplication.answers);
    console.log('나와라 학년..', selectedApplication.grade);
  }, [applicationRecruitment, selectedApplication.isSubmit]);

  const save = () => {
    const updatedApplication = { ...application };
    const applicationId = updatedApplication.id;
    updatedApplication.isSubmit = false;
    setApplication(updatedApplication);
    const dto = {
      recruitmentId: selectedRecruitment.recruitmentId,
      answer: answer,
      grade: application.grade,
      supportField: supportField,
      isAttending: application.isAttending,
      isSubmit: application.isSubmit
    };
    const token = localStorage.getItem('accessToken');
    axios
      .put(`/api/application/update/${applicationId}`, dto, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response.data);
        alert('등록 되었습니다.');
      })
      .catch((error) => {
        console.log('Error updating return status:', error);
        alert('등록에 실패하였습니다.');
      });
  };

  const submit = () => {
    const updatedApplication = { ...application };
    const applicationId = updatedApplication.id;
    updatedApplication.isSubmit = true;
    setApplication(updatedApplication);
    const dto = {
      recruitmentId: 0,
      answer: answer,
      grade: application.grade,
      supportField: supportField,
      isAttending: application.isAttending,
      isSubmit: true
    };

    const token = localStorage.getItem('accessToken');
    axios
      .put(
        `https://nolmyong.com/api/application/submit/${applicationId}`,
        dto,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        console.log(response);
        alert('등록 되었습니다.');
      })
      .catch((error) => {
        console.error('Error updating return status:', error);
        alert('등록에 실패하였습니다.');
      });
  };

  return (
    <ApplicationModal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <BoardContainer>
          <BoardTitle>기본 등록 정보</BoardTitle>
          <BoardText>
            해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
          </BoardText>
          <BasicInfo
            user={userInfo}
            application={selectedApplication}
            setApplication={setApplication}
            setSupportField={setSupportField}
            setIsAttending={setIsAttending}
            fields={fields}
            isAttending={isAttending}
            grade={selectedApplication.grade ? selectedApplication.grade : ''}
            userSelectedField={
              selectedApplication.supportField
                ? selectedApplication.supportField
                : ''
            }
          />
          <TextareaContainer
            questions={questions}
            setQuestions={setQuestions}
            answer={answer}
            setAnswer={setAnswer}
            characterLimit={characterLimit}
          />
        </BoardContainer>
        <Buttons save={save} submit={submit} />
      </ModalContent>
    </ApplicationModal>
  );
};
const ModalContent = styled.div``;

export default TemporaryApplicationModal;

const BoardContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.938rem;
  background-color: #ffffff;
  margin-bottom: 3rem;
`;

const BoardTitle = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
  margin-top: 2.3rem;
`;

const BoardText = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.5rem;
`;
