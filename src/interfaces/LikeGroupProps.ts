export interface Group {
  id: number;
  groupName: string;
  presidentId: number;
  logoImageUrl: string;
  establishedYear: number;
  numOfMember: string;
  introduction: string;
  relationMajor: string[];
  relatedTag: string[];
  activityTitle: string[];
  activityContent: string[];
  campus: string;
  largeCategory: string;
  mediumCategory: string;
  smallCategory: string;
  subCategory: string;
  recruit: boolean;
  approve: boolean;
}
