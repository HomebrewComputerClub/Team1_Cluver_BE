import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  token: string;

  @Column()
  isChecked: boolean;
}
