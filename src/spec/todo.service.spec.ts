import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from '../modules/todos/todo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from '../database/repositories/todo/todo.entity';

describe('TodoService', () => {
  let service: TodoService;

  const repositoryMockFactory = () => {
    return { msg: 'mockFunc' };
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
