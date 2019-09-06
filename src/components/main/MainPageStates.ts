/**
 * states for the main page
 */

export interface MState {
  //
  // Swipes
  //
  swipeRightHandler(...args: any[]): any;
  swipeLeftHandler(...args: any[]): any;

  //
  // Scrolls
  //
  scrollUpHandler(...args: any[]): any;
  scrollDownHandler(...args: any[]): any;
}

export class MMobileState implements MState {
  //
  // Swipes
  //
  swipeRightHandler(...args: any[]): any {

  }
  swipeLeftHandler(...args: any[]): any {

  }

  //
  // Scrolls
  //
  scrollUpHandler(...args: any[]): any {
    return null;
  }
  scrollDownHandler(...args: any[]): any {
    return null;
  }
}

export class MDesktopState implements MState {
  //
  // Swipes
  //
  swipeRightHandler(...args: any[]): any {
    return null;
  }
  swipeLeftHandler(...args: any[]): any {
    return null;
  }

  //
  // Scrolls
  //
  scrollUpHandler(...args: any[]): any {

  }
  scrollDownHandler(...args: any[]): any {

  }
}