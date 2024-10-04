import { AbstractControl, ValidationErrors } from '@angular/forms';

export function timeValidator(control: AbstractControl): ValidationErrors | null {
    // const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    const timePattern = /^([0-9]|[01][0-9]|2[0-3]):([0-9]|[0-5][0-9])$/; 
    const value = control.value?.trim(); // Ensure the value is trimmed and not null/undefined
  
    if (!value) {
      return null; // No validation if the value is empty
    }
  
    // Split the value into hours and minutes, even if it's in the wrong format
    const timeParts = value.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
  
    // Validate the hours and minutes, even if the time format is incorrect
    if (hours > 23 || minutes > 59) {
      console.log("Time is over:", hours, minutes);
      return { timeExceeded: true }; // Time exceeds 23:59
    }
  
    // Check if the time format matches the valid pattern
    if (!timePattern.test(value)) {
      console.log("Invalid format: Time should be in HH:mm format.", value);
      return { invalidTime: true }; // Time format is incorrect
    }
  
    return null; // Valid time
  }
  
  
