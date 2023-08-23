import { OrganizationProps } from '../Organization/OrganizationProps';

export interface RecruitmentProps {
  id: string;
  groupId: string;
  title: string;
  content: string;
  description: string;
  applicationField: string[];
  recruitmentStartDate: string;
  recruitmentDeadline: string;
  activePeriod: string;
  activePlace: string;
  views: number;
  question: string[];
  characterLimit: number[];
}
