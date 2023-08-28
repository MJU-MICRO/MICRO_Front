import axios from 'axios';
import { UserSentApplicationProps } from 'interfaces/UserSentApplicationProps';

export const fetchFilteredRecruitments = async (
  applicationList: UserSentApplicationProps[]
): Promise<any[]> => {
  const recruitmentIds = Array.from(
    new Set(applicationList.map((r) => r.recruitmentId))
  );

  const fetchedRecruitments = await Promise.all(
    recruitmentIds.map(async (recruitmentId) => {
      try {
        const response = await axios.get('https://nolmyong.com/recruitments');
        const filteredRecruitment = response.data.data.filter(
          (recruitment) => recruitment.recruitmentId === recruitmentId
        );
        return filteredRecruitment[0] || null;
      } catch (error) {
        console.log('recruitments 호출 실패', error);
        return null;
      }
    })
  );

  return fetchedRecruitments.filter((recruitment) => recruitment !== null);
};
