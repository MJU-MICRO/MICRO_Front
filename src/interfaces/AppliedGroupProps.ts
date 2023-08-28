export interface AppliedGroupProps {
  id: number;
  userId: number;
  recruitmentId: number;
  answers: string[]; // answers는 string 배열로 가정합니다.
  passStatus: boolean;
  grade: string;
  supportField: string;
  isAttending: boolean;
  isSubmit: boolean;
}

export default AppliedGroupProps;
