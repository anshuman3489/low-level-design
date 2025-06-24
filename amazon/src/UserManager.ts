import { User } from "./User";

export class UserManager {
    private static instance: UserManager;
    users: Map<string, User>;

    private constructor() {
        this.users = new Map();
    }

    static getInstance() {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    addUser(name: string, email: string) {
        let user = this.users.get(email);
        if (user) {
            console.warn('User already exists!');
            return user;
        }

        user = new User(name, email);
        this.users.set(email, user);
        return user;
    }
}