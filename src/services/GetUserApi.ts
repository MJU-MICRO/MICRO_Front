import axios from 'axios';
import UserProps from 'interfaces/UserProps';
import { useEffect } from 'react';

interface GetUserApiProps {
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
  accessToken: string;
}

const GetUserApi = ({ setUser, accessToken }: GetUserApiProps) => {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://nolmyong.com/api/user/my',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      responseType: 'json'
    }).then((response) => {
      const userDataFromApi = response.data.data;
      setUser({
        name: userDataFromApi.name,
        profileImageUrl: userDataFromApi.profileImageUrl,
        major: userDataFromApi.major,
        introduction: userDataFromApi.introduction,
        email: userDataFromApi.email
      });
    });
  }, [setUser, accessToken]);

  return null;
};

export default GetUserApi;
