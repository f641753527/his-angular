export class Token {
  static readonly type = 'Token';
  constructor(public token: string) {}
}

export class User {
  static readonly type = 'User';
  constructor(public user: any) {}
}

export class Clinic {
  static readonly type = 'Clinic';
  constructor(public clinic_ic: string) {}
}