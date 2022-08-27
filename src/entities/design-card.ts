import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class DesignCard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true, default: [], type: 'jsonb' })
  imageLinks: string[];

  @Column({ nullable: true, default: [], type: 'jsonb' })
  videoLinks: string[];
}
