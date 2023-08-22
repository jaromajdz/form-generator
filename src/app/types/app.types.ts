export interface menuConfigT{
    label: string;
    description: string;
    url: string;
    menu?: menuConfigT[];
}

export enum formFieldControlTypeEnum {
    input = 'input',
    textArea = 'textArea',
    dropdown = 'dropdown',
    autoComplete = 'autocComplete',
    checkbox = 'checkbox',
    radioButton = 'radioButton'
}

export interface dropdownValuesT {
    key: string | number;
    label: string;
}

export interface configT {
    [formFieldControlTypeEnum.dropdown]: dropdownValuesT
}


export interface formFieldT {
    label: string;
    fieldName: string;
    controlType: formFieldControlTypeEnum;
    fieldConfig?: formFieldT['controlType'] extends formFieldControlTypeEnum.dropdown ? dropdownValuesT : never
}





