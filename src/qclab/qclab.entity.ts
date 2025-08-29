import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QclabElement } from './qclab-element.entity';

@Entity()
export class Qclab {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CompanyCode: string;

  @Column()
  BranchCode: string;

  @Column()
  UnitCode: string;

  @Column()
  DataSource: string;

  @Column()
  AnalysisType: string;

  @Column()
  Time: string;

  @Column()
  Day: string;

  @Column()
  Month: string;

  @Column()
  Year: string;

  @Column()
  AnalyticalMethod: string;

  @Column()
  AnalyticalTask: string;

  @Column()
  Grade: string;

  @Column()
  TypeStandard: string;

  @Column()
  RunsDone: string;

  @Column()
  RunsInAverage: string;

  @Column()
  RunNumber: string;

  @Column()
  RunType: string;

  @Column()
  SID1: string;

  @Column()
  SID2: string;

  @Column()
  SID3: string;

  @Column()
  SID4: string;

  @Column()
  SID5: string;

  @Column()
  SID6: string;

  @Column()
  SID7: string;

  @Column()
  SID8: string;

  @Column()
  SID9: string;

  @Column()
  SID10: string;

  @Column()
  NumberOfElement: string;

  @OneToMany(() => QclabElement, (element) => element.qclab, { cascade: true })
  elements: QclabElement[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
