export {};

declare global {
  interface Window {
    widget: any;
    recaptchaVerifier: any;
    confirmationResult: any; // whatever type you want to give. (any,number,float etc)
  }
}
