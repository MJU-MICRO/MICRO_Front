export interface UserSentApplicationProps {
  id: number;
  userId: number;
  recruitmentId: number;
  answer?: string[];
  passStatus?: boolean;
  grade?: string;
  supportField?: string;
  isAttending?: boolean;
  isSubmit: boolean;
}
