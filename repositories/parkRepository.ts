import { Repository } from "../libs/Repository";

export class ParkRepository extends Repository {
    findAll = async () => {
        const query = {
            name: "fetch-all-book",
            text: `SELECT * FROM park`,
        };

        try {
            const result = await this.pool.query(query);

            const park = result.rows.map((row) => {
                console.log(row)
            })
            return park;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}