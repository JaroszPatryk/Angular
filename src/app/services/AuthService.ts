export class AuthService {
  public isAuthetnicated(): Promise<boolean> {
    let date: Date = new Date();
    if (date.getMinutes() % 2 === 0) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }
}
