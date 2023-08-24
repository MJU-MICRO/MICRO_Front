import { OrganizationProps } from '../Organization/OrganizationProps';

export interface RecruitmentProps {
  recruitmentId: number;
  groupId: number;
  title: string;
  content: string;
  description: string;
  fields: string[];
  startDateTime: string;
  endDateTime: string;
  activePeriod: string;
  activePlace: string;
  question: string[];
  characterLimit: number[];
  captions: string[];
  recruitmentImageUrl: string[];
  questions: string[];
}
