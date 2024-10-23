import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../../database/repositories/todo/dto/create-todo.dto';
import { UpdateTodoDto } from '../../database/repositories/todo/dto/update-todo.dto';
import { Todo } from '../../database/repositories/todo/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns todo #:${id}`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates todo #: ${id}`;
  }

  remove(id: number) {
    return `This action removes todo #${id}`;
  }
}
