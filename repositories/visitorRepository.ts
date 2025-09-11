import { Repository } from "../libs/Repository";

export class VisitorRepository extends Repository {
    findAll = async () => {
        const query = {
            name: "fetch-all-visitor",
            text: `SELECT * FROM visitor`,
        };

        try {
            const result = await this.pool.query(query);

            const visitors = result.rows.map((row) => {
                console.log(row)
            })
            return visitors;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}