export interface User {
  name: string;
  studentId: string;
  major: string;
  phone: string;
}

export interface Application {
  answer: string[];
  supportField: string;
  grade: string;
  isAttending: boolean;
  isSubmit: boolean;
}

export interface TextareaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
export interface TextareaContainerProps {
  questions: string[];
  setQuestions: React.Dispatch<React.SetStateAction<string[]>>;
  answer: string[];
  setAnswer: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface FieldOption {
  fieldOptions: string[];
}

export interface BasicInfoProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  fieldOptions: string[];
  setFieldOptions: React.Dispatch<React.SetStateAction<string[]>>;
  application: Application;
  setApplication: React.Dispatch<React.SetStateAction<Application>>;
}

export interface ButtonsProps {
  save: () => void;
  submit: () => void;
}
