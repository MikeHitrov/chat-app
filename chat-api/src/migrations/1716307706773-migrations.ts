import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1716307706773 implements MigrationInterface {
    name = 'Migrations1716307706773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "userID" integer`);
        await queryRunner.query(`ALTER TABLE "message" ADD "sender" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_5c71f2689991a90f2c0e8cf2a26" FOREIGN KEY ("userID") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_5c71f2689991a90f2c0e8cf2a26"`);
        await queryRunner.query(`ALTER TABLE "message" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "sender"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "userID"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "username" character varying NOT NULL`);
    }

}
