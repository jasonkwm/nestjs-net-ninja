import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'service signup';
  }

  signin() {
    return 'service signin';
  }

  signout() {
    return 'signout';
  }
}
