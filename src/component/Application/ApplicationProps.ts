export interface User {
  name: string;
  studentId: string;
  major: string;
  phoneNumber: string;
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
  characterLimit: number[];
}

export interface BasicInfoProps {
  user: User;
  application: Application;
  setApplication: (application: any) => void;
  setSupportField: (field: string) => void;
  fields: string[];
  setIsAttending: (isAttending: boolean) => void;
}

export interface ButtonsProps {
  save: () => void;
  submit: () => void;
}
