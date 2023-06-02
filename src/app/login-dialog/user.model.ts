export class User {
  constructor(public email: string,
              public id: string,
              private _token: string,
              private _tokenExpirationDate: number) {
  }

  public get token(): string {
    if (!this._tokenExpirationDate || Date.now() > this._tokenExpirationDate) {
      return null;
    }

    return this._token;
  }
}
