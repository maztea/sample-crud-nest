import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Qclab } from './qclab.entity';

@Entity()
export class QclabElement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Qclab, (qclab) => qclab.elements, { onDelete: 'CASCADE' })
  qclab: Qclab;

  @Column()
  ElementName: string;

  @Column()
  ElementFlag: string;

  @Column()
  LowerGrade: string;

  @Column()
  UpperGrade: string;

  @Column()
  InternalLowerGrade: string;

  @Column()
  InternalUpperGrade: string;

  @Column()
  ElementValue: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
