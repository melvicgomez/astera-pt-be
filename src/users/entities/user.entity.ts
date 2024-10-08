import { UserRole } from 'src/models/user';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    type: 'character varying',
    length: 100,
  })
  email_address: string;

  @Column({
    type: 'character varying',
    length: 100,
  })
  username: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  role: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
