import { ApiProperty } from '@nestjs/swagger';

export enum Role {
    ADMIN = 'ADMIN',
    SUPER_USER = 'SUPER_USER',
    NORMAL_USER = 'NORMAL_USER'
}

export class UserDTO {
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    avatar: string;

    @ApiProperty({
        enum: Role
    })
    role: Role;

    @ApiProperty()
    defaultPage: string;

    @ApiProperty()
    isActivated: boolean;
    constructor(options: {
        id?: string,
        username?: string,
        password?: string,
        avatar?: string,
        role?: Role,
        defaultPage?: string,
        isActivated?: boolean,
    } = {}) {
        this.id = options.id;
        this.username = options.username || '';
        this.password = options.password || '';
        this.avatar = options.avatar || '';
        this.defaultPage = options.defaultPage || '';
        this.role = options.role;
        this.isActivated = options.isActivated;
    }
}
