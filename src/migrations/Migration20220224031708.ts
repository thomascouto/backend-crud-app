import { Migration } from '@mikro-orm/migrations';

export class Migration20220224031708 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');

    this.addSql('create table "activity" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "userid_id" int not null);');
    this.addSql('alter table "activity" add constraint "activity_name_unique" unique ("name");');

    this.addSql('alter table "activity" add constraint "activity_userid_id_foreign" foreign key ("userid_id") references "user" ("id") on update cascade;');
  }

}
