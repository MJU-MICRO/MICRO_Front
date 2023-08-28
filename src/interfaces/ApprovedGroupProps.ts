export interface ApprovedGroup {
  id: number;
  presidentId: number;
  groupName: string;
  logoImageUrl: string;
  introduction: string;
  relationMajor: string[];
  relatedTag: string[];
  campus: string;
  subCategory: string;
  recruit: boolean;
  approve: boolean;
}
