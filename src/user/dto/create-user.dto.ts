import { User } from '@prisma/client';

export class CreateUserDto implements User {
  id: number;
  fullname: string;
  pincode: string;
  isEmailVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  failedLoginAttempts: number;
  lockoutEndTime: Date;
  name: string;
  email: string;
  password: string;
  role: string;
}
