import React, { useState, useEffect } from 'react';
import { ClubProps } from '../../component/Organization/Club/ClubProps';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ClubDetail() {
  const { id } = useParams<{ id: string }>();
  const [clubData, setClubData] = useState<ClubProps | null>(null);

  useEffect(() => {
    async function fetchClubData() {
      try {
        const response = await axios.get(`/api/clubs/${id}`);
        setClubData(response.data);
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    }
    fetchClubData();
  }, [id]);

  if (!clubData) {
    return <div>Loading...</div>;
  }

  // Render club detail using clubData

  return (
    <div>
      <h2>{clubData.name}</h2>
      {/* Render other club details */}
    </div>
  );
}

export default ClubDetail;
