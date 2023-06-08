export interface FormItems {
  batch_1: string;
  batch_2: string;
  batch_3: string;
  email_1: string;
  email_2: string;
  email_3: string;
  id_1: string;
  id_2: string;
  id_3: string;
  name_1: string;
  name_2: string;
  name_3: string;
  phone_1: string;
  phone_2: string;
  phone_3: string;
  rules_agreed: boolean;
  school_1: string;
  school_2: string;
  school_3: string;
  team_name: string;
  token: string;
}

const formItemKeys: (keyof FormItems)[] = [
  "batch_1",
  "batch_2",
  "batch_3",
  "email_1",
  "email_2",
  "email_3",
  "id_1",
  "id_2",
  "id_3",
  "name_1",
  "name_2",
  "name_3",
  "phone_1",
  "phone_2",
  "phone_3",
  "rules_agreed",
  "school_1",
  "school_2",
  "school_3",
  "team_name",
];

export const validateFormData = (data: FormItems) => {
  for (const i of formItemKeys) {
    if (data[i] == null || data[i].toString().trim() == "") {
      return false;
    }
  }
  return true;
};
