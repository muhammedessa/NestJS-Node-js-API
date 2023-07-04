import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Repository } from "typeorm";
import { sign } from 'jsonwebtoken';
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
 

  async signIn(userName: string, pass: string): Promise<any> {
     
    const user = await this.userRepository.findOne({where:{"userName":userName}});
    if (user?.password !== pass) { 
      throw new NotFoundException('Invalid credentials');
    } 
 
      const token = sign({ ...user }, 'secrete');
      return { token, user };

  } 

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: Partial<User>): Promise<User> {  
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }
 
}