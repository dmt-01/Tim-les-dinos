import { Repository } from "../libs/Repository";

export class UsersRepository extends Repository {
    findAll = async () => {
        const query = {
            name: "fetch-all-users",
            text: `SELECT * FROM users`,
        };

        try {
            const result = await this.pool.query(query);

            const users = result.rows.map((row) => {
                console.log(row)
            })
            return users;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}