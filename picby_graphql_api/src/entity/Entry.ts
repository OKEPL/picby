import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalog } from "./Catalog";

@ObjectType()
@Entity()
export class Entry extends BaseEntity {
  
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Field()
  @Column("text")
  desc: string;

  @ManyToOne(() => Catalog, catalog => catalog.entries, {onDelete: 'CASCADE'})
  catalog: Catalog;

}
