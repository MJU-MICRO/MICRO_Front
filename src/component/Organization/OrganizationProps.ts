export interface OrganizationProps {
  id: string;
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
}
