import React, { useState, useEffect } from 'react';
import { StudentCouncilProps } from '../../component/Organization/StudentCouncil/StudentCouncilProps';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentCouncilDetail() {
  const { id } = useParams<{ id: string }>();
  const [studentCouncilData, setStudentCouncilData] =
    useState<StudentCouncilProps | null>(null);

  useEffect(() => {
    async function fetchStudentCouncilData() {
      try {
        const response = await axios.get(`/api/studentCouncil/${id}`);
        setStudentCouncilData(response.data);
      } catch (error) {
        console.error('Error fetching student council data:', error);
      }
    }
    fetchStudentCouncilData();
  }, [id]);

  if (!studentCouncilData) {
    return <div>Loading...</div>;
  }

  // Render student council detail using studentCouncilData

  return (
    <div>
      <h2>{studentCouncilData.name}</h2>
      {/* Render other student council details */}
    </div>
  );
}

export default StudentCouncilDetail;
