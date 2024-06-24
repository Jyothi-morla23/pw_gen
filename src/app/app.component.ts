import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public includeLetters: boolean = false;
  public includeNumbers: boolean = false;
  public includeSymbols: boolean = false;
  public password: string = '';
  public length: number = 0;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: any) {
    const parsedVlaue = parseInt(event.target.value);
    if (!isNaN(parsedVlaue)) {
      this.length = parsedVlaue;
      console.log(this.length);
    }
  }

  onButtonClick() {
    this.password = this.generatePassword();
  }
  generatePassword(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validchars = '';
    if (this.includeLetters) {
      validchars += letters;
    }

    if (this.includeNumbers) {
      validchars += numbers;
    }

    if (this.includeSymbols) {
      validchars += symbols;
    }

    if (validchars.length === 0) {
      return '';
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validchars.length);
      generatedPassword += validchars[index];
    }

    return generatedPassword;
  }
}
