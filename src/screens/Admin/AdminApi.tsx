import axios from 'axios';

const token = localStorage.getItem('accessToken');
const instance = axios.create({
  baseURL: 'https://nolmyong.com/',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const getMyData = () => {
  return instance.get('api/user/my');
};

export const getUserData = () => {
  return instance.get('api/admin/user/retrieve');
};

export const getAdminData = () => {
  return instance.get('api/admin/retrieve');
};

export const getAdminGroupData = () => {
  return instance.get('api/admin/group');
};

export const approveGroup = (groupId) => {
  return instance.put(`api/admin/group/approve/${groupId}`, null);
};

export const deleteGroup = (groupId) => {
  return instance.delete(`api/admin/group/${groupId}`);
};

export const registerAdmin = (email) => {
  return instance.patch('api/admin/register', { email });
};

export const revokeAdmin = (email) => {
  return instance.patch('api/admin/revoke', { email });
};

export const deleteUser = (email) => {
  return instance.delete('api/admin/user/delete', { data: { email } });
};
