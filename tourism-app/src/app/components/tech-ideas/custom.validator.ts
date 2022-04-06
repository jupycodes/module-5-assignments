import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenWordValidator(forbiddenWord: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key:string]: any} | null => {
    const forbidden = forbiddenWord.test(control.value);
    return forbidden ? { 'forbiddenWord': {value: control.value}} : null;
    }
    
}

//https://www.youtube.com/watch?v=nm-x8gsqB2E