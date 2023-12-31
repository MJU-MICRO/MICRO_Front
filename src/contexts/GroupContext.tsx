import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ApprovedGroup } from 'interfaces/ApprovedGroupProps';

const ApprovedGroupsContext = createContext<ApprovedGroup[]>([]);

interface ApprovedGroupsProviderProps {
  children: React.ReactNode;
}

export const ApprovedGroupsProvider = ({
  children
}: ApprovedGroupsProviderProps) => {
  const [approvedGroups, setApprovedGroups] = useState<ApprovedGroup[]>([]);

  useEffect(() => {
    fetchApprovedGroups().then((data) => setApprovedGroups(data));
  }, []);

  const fetchApprovedGroups = async () => {
    try {
      const response = await axios.get('https://nolmyong.com/api/group');
      const data: ApprovedGroup[] = response.data.data;

      return data;
    } catch (error) {
      console.log('GroupContext group GET 실패', error);
      return [];
    }
  };

  return (
    <ApprovedGroupsContext.Provider value={approvedGroups}>
      {children}
    </ApprovedGroupsContext.Provider>
  );
};

export const useApprovedGroups = () => {
  const approvedGroups = useContext(ApprovedGroupsContext);
  return approvedGroups;
};
