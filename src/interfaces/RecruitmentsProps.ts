export interface RecruitmentsProps {
  recruitmentId: number;
  startDateTime: string;
  endDateTime: string;
  title: string;
  description: string;
  content: string;
  applicationFields: string[];
  activePeriod: 'SEMESTER' | 'YEAR';
  recruitmentImageUrl: string[];
  captions: string[];
  activePlace: string;
  questions?: string[];
  characterLimit: number[];
  groupId: number;
  submit: boolean;
}
