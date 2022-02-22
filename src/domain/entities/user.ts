import { Entity, Property, Unique } from "@mikro-orm/core";
import { BaseEntity } from "./abstractBaseEntity";

export type UserProps = {
  username: string;
  password: string;
};

@Entity()
export class User extends BaseEntity {
  @Property()
  @Unique()
  username!: string;

  @Property()
  password!: string;

  set props({ username, password }: UserProps) {
    this.username = username;
    this.password = password;
  }

  constructor(props: UserProps, id?: number) {
    super();
    if (props) {
      this.username = props.username;
      this.password = props.password;
    }
    if (id) {
      this.id = id;
    }
  }
}
