import axios from 'axios';
import { GroupDetail } from 'interfaces/GroupDetailProps';
import React from 'react';

export const fetchGroups = async (
  groupId: number
): Promise<GroupDetail | null> => {
  try {
    const response = await axios.get(
      `https://nolmyong.com/api/group/${groupId}`
    );
    return response.data.data;
  } catch (error) {
    console.log(`fetchGroupIngo group ${groupId} 호출 실패:`, error);
    return null;
  }
};
