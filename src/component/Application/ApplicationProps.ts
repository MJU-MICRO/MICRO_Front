export interface User {
  name: string;
  studentId: string;
  major: string;
  field: string;
  phone: string;
  grade: string;
}

export interface FieldOption {
  fieldOptions: string[];
}

export interface BasicInfoProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  fieldOptions: string[];
  setFieldOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface TextareaProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface Application {
  motivation: string;
  favoriteFruit: string;
}

export interface TextareaContainerProps {
  application: Application;
  setApplication: React.Dispatch<React.SetStateAction<Application>>;
}

export interface ButtonsProps {
  save: () => void;
  submit: () => void;
}
