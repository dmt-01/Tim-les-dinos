import { Repository } from "../libs/Repository";

export class ReserveRepository extends Repository {
    findAll = async () => {
        const query = {
            name: "fetch-all-reserve",
            text: `SELECT * FROM reserve`,
        };

        try {
            const result = await this.pool.query(query);

            const reserves = result.rows.map((row) => {
                console.log(row)
            })
            return reserves;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}