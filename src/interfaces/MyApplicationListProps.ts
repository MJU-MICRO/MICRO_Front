import { RecruitmentProps } from 'component/recruitment/RecruitmentProps';

interface MyApplicationListProps {
  name: string;
  imageUrl: string;
  establishedYear: number;
  numberOfMember: string;
  introduction: string;
  relationMajor: string[];
  relatedTag: string[];
  activityTitle: string[];
  activityContent: string[];
  isRecruit: boolean;
  isApprove: boolean;
  campus: string;
  largeCategory: string;
  mediumCategory: string;
  smallCategory: string;
  subCategory: string;
  presidentEmail: string;
  recruitment: RecruitmentProps;
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

export default MyApplicationListProps;
