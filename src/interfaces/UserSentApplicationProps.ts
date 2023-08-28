export interface UserSentApplicationProps {
  id: number;
  userId: number;
  recruitmentId: number;
  answers: string[];
  passStatus: boolean;
  grade: string;
  supportField: string;
  isAttending: boolean;
  isSubmit: boolean;
}
