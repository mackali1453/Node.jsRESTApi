import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class DeviceData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deviceId: number;

    @Column()
    deviceStatus: string;

    @Column()
    engineRpm: number;

    @Column()
    engineSpeed: number;

    @Column()
    enginePressure: number;

}
