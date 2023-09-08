import {
  Injectable,
  NotFoundException,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/res_user.entity';
import { CreateUserDto } from './dto/create-res_user.dto';
import { UpdateUserDto } from './dto/update-res_user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      throw new NotFoundException('User not found');
    }
    return userFound;
  }

  async updateUser(id: number, user: UpdateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = Object.assign(userFound, user);
    return this.userRepository.save(updatedUser);
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }

    return result;
  }
}
