import { Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserModel } from './entities/user.entity'
import { Repository } from 'typeorm'

@Controller()
export class AppController {
    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>,
    ) {}

    @Post('users')
    async createUser() {
        return this.userRepository.save({ name: '용덕' })
    }

    @Get('users')
    async getUsers() {
        return await this.userRepository.find()
    }

    @Patch('users/:id')
    async updateUser(@Param('id') id: string) {
        return await this.userRepository.update(id, { name: '용쥬' })
    }
}
