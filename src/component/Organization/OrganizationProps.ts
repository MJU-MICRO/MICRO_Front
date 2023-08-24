export interface OrganizationProps {
  id: number;
  groupName: string;
  imageUrl: string;
  establishedYear: number;
  numOfMember: string;
  introduction: string;
  relationMajor: string[];
  relatedTag: string[];
  activityTitle: string[];
  activityContent: string[];
  recruit: boolean;
  isApprove: boolean;
  campus: string;
  largeCategory: string;
  mediumCategory: string;
  smallCategory: string;
  subCategory: string;
  presidentId: number;
}
