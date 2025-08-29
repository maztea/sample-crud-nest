import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQclabTables1756442000000 implements MigrationInterface {
  name = 'CreateQclabTables1756442000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'qclab',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'CompanyCode', type: 'nvarchar', isNullable: false },
          { name: 'BranchCode', type: 'nvarchar', isNullable: false },
          { name: 'UnitCode', type: 'nvarchar', isNullable: false },
          { name: 'DataSource', type: 'nvarchar', isNullable: false },
          { name: 'AnalysisType', type: 'nvarchar', isNullable: false },
          { name: 'Time', type: 'nvarchar', isNullable: false },
          { name: 'Day', type: 'nvarchar', isNullable: false },
          { name: 'Month', type: 'nvarchar', isNullable: false },
          { name: 'Year', type: 'nvarchar', isNullable: false },
          { name: 'AnalyticalMethod', type: 'nvarchar', isNullable: false },
          { name: 'AnalyticalTask', type: 'nvarchar', isNullable: false },
          { name: 'Grade', type: 'nvarchar', isNullable: false },
          { name: 'TypeStandard', type: 'nvarchar', isNullable: false },
          { name: 'RunsDone', type: 'nvarchar', isNullable: false },
          { name: 'RunsInAverage', type: 'nvarchar', isNullable: false },
          { name: 'RunNumber', type: 'nvarchar', isNullable: false },
          { name: 'RunType', type: 'nvarchar', isNullable: false },
          { name: 'SID1', type: 'nvarchar', isNullable: false },
          { name: 'SID2', type: 'nvarchar', isNullable: false },
          { name: 'SID3', type: 'nvarchar', isNullable: false },
          { name: 'SID4', type: 'nvarchar', isNullable: false },
          { name: 'SID5', type: 'nvarchar', isNullable: false },
          { name: 'SID6', type: 'nvarchar', isNullable: false },
          { name: 'SID7', type: 'nvarchar', isNullable: false },
          { name: 'SID8', type: 'nvarchar', isNullable: false },
          { name: 'SID9', type: 'nvarchar', isNullable: false },
          { name: 'SID10', type: 'nvarchar', isNullable: false },
          { name: 'NumberOfElement', type: 'nvarchar', isNullable: false },
          { name: 'createdAt', type: 'datetime', default: 'GETDATE()' },
          { name: 'updatedAt', type: 'datetime', default: 'GETDATE()' },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'qclab_element',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'qclabId', type: 'int', isNullable: false },
          { name: 'ElementName', type: 'nvarchar', isNullable: false },
          { name: 'ElementFlag', type: 'nvarchar', isNullable: false },
          { name: 'LowerGrade', type: 'nvarchar', isNullable: false },
          { name: 'UpperGrade', type: 'nvarchar', isNullable: false },
          { name: 'InternalLowerGrade', type: 'nvarchar', isNullable: false },
          { name: 'InternalUpperGrade', type: 'nvarchar', isNullable: false },
          { name: 'ElementValue', type: 'nvarchar', isNullable: false },
          { name: 'createdAt', type: 'datetime', default: 'GETDATE()' },
          { name: 'updatedAt', type: 'datetime', default: 'GETDATE()' },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'qclab_element',
      new TableForeignKey({
        columnNames: ['qclabId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'qclab',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('qclab_element');
    await queryRunner.dropTable('qclab');
  }
}
