import { OrganizationProps } from '../Organization/OrganizationProps';

export interface RecruitmentProps {
  recruitmentId: number;
  groupId: number;
  title: string;
  content: string;
  description: string;
  applicationFields: string[];
  startDateTime: string;
  endDateTime: string;
  activePeriod: string;
  activePlace: string;
  characterLimit: number[];
  captions: string[];
  recruitmentImageUrl: string[];
  questions: string[];
}
