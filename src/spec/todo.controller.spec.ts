import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from '../modules/todos/todo.controller';
import { TodoService } from '../modules/todos/todo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from '../database/repositories/todo/todo.entity';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    })
      .useMocker((token) => {
        const results = ['test1', 'test2'];
        if (token === TodoService) {
          return { findAll: jest.fn().mockResolvedValue(results) };
        }
        if (token === getRepositoryToken(Todo)) {
          return { findAll: jest.fn().mockResolvedValue(results) };
        }
        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
