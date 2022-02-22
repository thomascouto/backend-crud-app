import { Entity, ManyToOne, Property, Unique } from "@mikro-orm/core";
import { BaseEntity } from "./abstractBaseEntity";

type ActivityProps = {
  name: string;
  userid: number;
};

@Entity()
export class Activity extends BaseEntity {
  @Property()
  @Unique()
  name!: string;

  @ManyToOne("User")
  userid!: number;

  set props({ name, userid }: ActivityProps) {
    this.name = name;
    this.userid = userid;
  }

  constructor(props?: ActivityProps, userid?: number) {
    super();
    if (props) {
      this.name = props.name;
      this.userid = props.userid;
    }
  }
}
