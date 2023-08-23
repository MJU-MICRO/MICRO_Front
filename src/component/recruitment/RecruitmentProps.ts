import { OrganizationProps } from '../Organization/OrganizationProps';

export interface RecruitmentProps {
  id: number;
  groupId: number;
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
