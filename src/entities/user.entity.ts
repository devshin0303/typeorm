import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm'

@Entity()
export class UserModel {
    //ID
    //자동으로 ID를 생성
    //@PrimaryGeneratedColumn()
    //PrimaryGeneratedColumn은 자동으로 ID를 생성
    //테이블 안에서 각각의 Row를 구분할 수 있는 값
    @PrimaryGeneratedColumn()
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    name: string

    //데이터가 업데이트 될 때마다 1씩 올라간다.
    //save() 함수가 몇번 불렸는 지 기억
    @VersionColumn()
    version: number
}
