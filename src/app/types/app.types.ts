export interface menuConfigT {
  label: string;
  description: string;
  url: string;
  menu?: menuConfigT[];
}

export enum formFieldControlTypeEnum {
  input = 'input',
  password = 'password',
  textArea = 'textArea',
  dropdown = 'dropdown',
  autoComplete = 'autocComplete',
  checkbox = 'checkbox',
  radioButton = 'radioButton',
}

export interface dropdownValuesT {
  key: string | number;
  label: string;
}

export interface configT {
  [formFieldControlTypeEnum.dropdown]: dropdownValuesT;
}

export interface formGroupT {
  groupName: string;
  title: string;
  form: formFieldT[];
}

export interface formFieldT {
  label: string;
  fieldName: string;
  inputType: formFieldControlTypeEnum;
  fieldConfig?: formFieldT['inputType'] extends formFieldControlTypeEnum.dropdown
    ? dropdownValuesT
    : never;
  formGroup?: formFieldT;
}

export interface signInUpDataT {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface signInResponseT {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

export interface singnUpResponseT {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
