import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  bmi = 0;
  error1 = 'กรุณากรอก Email!';
  error2 = 'กรุณากรอก ID Card!';
  idValidator: ValidatorFn = (control: AbstractControl) => {
    const ID_CARD: string | null = control.value
    if (ID_CARD) {
      if (ID_CARD.length !== 13)
        return { idCard: true }
      let index = 13;
      let sum = 0;
      for (const NUMBER of ID_CARD.substring(0,12)){
        if(isNaN(Number(NUMBER))) return { idCard: true }
        sum += Number(NUMBER) * index--;
      }
      const LASTNUMBER = String((11-(sum%11))).slice(-1)
      if (ID_CARD.charAt(12) !== LASTNUMBER) return { idCard: true }
    }
    return null;
  }
  weightForm = new FormControl(null, Validators.required);
  heightForm = new FormControl(null, Validators.required);
  emailForm = new FormControl(null, [Validators.required, Validators.email]);
  idForm = new FormControl(null, [Validators.required, this.idValidator]);

  calculateBMI() {
    if (this.weightForm.invalid || this.heightForm.invalid)
      return;
    let WEIGHT = 0, HEIGHT = 0;
    if (this.weightForm.value)
      WEIGHT = this.weightForm.value;
    if (this.heightForm.value)
      HEIGHT = this.heightForm.value / 100;

    this.bmi = WEIGHT / (HEIGHT ** 2)
  }
  setError(errorNumber: string) {
    if(errorNumber === 'error1'){
      if (this.emailForm.errors) {
        if (this.emailForm.errors['required'])
          this.error1 = 'กรุณากรอก Email!';
        else if (this.emailForm.errors['email'])
          this.error1 = 'Email ไม่ถูกต้องตามรูปแบบที่กำหนด'
      }}
    else if (errorNumber === 'error2'){
      if (this.idForm.errors) {
        if (this.idForm.errors['required'])
          this.error2 = 'กรุณากรอก ID Card!';
        else if (this.idForm.errors['idCard'])
          this.error2 = 'ID Card ไม่ถูกต้อง'
      }
    }
  }
}
