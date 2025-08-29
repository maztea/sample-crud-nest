import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTodosTable1710000000000 implements MigrationInterface {
  name = 'CreateTodosTable1710000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'todo',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'nvarchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'nvarchar',
            isNullable: true,
          },
          {
            name: 'isCompleted',
            type: 'bit',
            default: 0,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'GETDATE()',
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            default: 'GETDATE()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('todo');
  }
}
