import { Application } from 'component/Application/ApplicationProps';
import BasicInfo from 'component/Application/BasicInfo';
import TextareaContainer from 'component/Application/TextareaContainer';
import { RecruitmentProps } from 'component/recruitment/RecruitmentProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BoardContainer,
  BoardTitle,
  BoardText
} from '../../Application/ApplicationStyles';
import ApplicationModal from '../ApplicationModal';

const TemporaryApplicationModal = ({
  isOpen,
  onClose,
  userInfo,
  recruitmentApplication,
  group
}) => {
  const [fields, setFields] = useState<string[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [characterLimit, setCharacterLimit] = useState<number[]>([]);
  const [supportField, setSupportField] = useState<string>('');
  const [recruitmentData, setRecruitmentData] =
    useState<RecruitmentProps | null>(null);
  const [application, setApplication] = useState<Application>({
    answer: [],
    supportField: '',
    grade: '1',
    isAttending: true,
    isSubmit: false
  });
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    // const applicationData = recruitmentApplication[0].applications || {};

    // setSupportField(applicationData.supportField || '');
    // setApplication({
    //   answer: applicationData.answer || [],
    //   supportField: applicationData.supportField || '',
    //   grade: applicationData.grade || '1',
    //   isAttending: applicationData.isAttending || true,
    //   isSubmit: applicationData.isSubmit || false
    // });

    // setRecruitmentData(recruitmentApplication[0].recruitment);
    // setIsAttending(applicationData.isAttending || true);
    // setIsSubmit(applicationData.isSubmit || false);

    console.log('하', recruitmentApplication);
  }, [recruitmentApplication, group]);

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
            application={application}
            setApplication={setApplication}
            setSupportField={setSupportField}
            setIsAttending={setIsAttending}
            fields={fields}
          />
          <TextareaContainer
            questions={questions}
            setQuestions={setQuestions}
            answer={answer}
            setAnswer={setAnswer}
            characterLimit={characterLimit}
          />
        </BoardContainer>
      </ModalContent>
    </ApplicationModal>
  );
};
const ModalContent = styled.div``;

export default TemporaryApplicationModal;
