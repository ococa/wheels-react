import {FormValue} from "./form";

interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
}

type FormRules = Array<FormRule>

export interface FormErrors {
  [L: string]: string[]
}

function isEmpty(value: any) {
  return value === '' || value === null || value === undefined;
}

const validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map(rule => {
    const key = rule.key;
    const value = formValue[key];
    if (rule.required && isEmpty(value)) {
      // @ts-ignore
      addError(rule.key, `${rule.key} is required`);
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, `${rule.key} minLength is  ${rule.minLength}, but got ${value.length}`);
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, `${rule.key} maxLength is  ${rule.maxLength}, but got ${value.length}`);
      }
    }
    if (rule.pattern) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, `${rule.key} pattern test is failed`)
      }
    } 
  });
  return errors
};

export default validator;
