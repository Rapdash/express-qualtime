import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public user_name: string;

  @Column()
  public email: string;

  @Column()
  public password_hash: string;
}
