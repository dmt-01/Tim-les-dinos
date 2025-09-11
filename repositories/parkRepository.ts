import { Repository } from "../libs/Repository";

export class ParkRepository extends Repository {
    findAll = async () => {
        const query = {
            name: "fetch-all-park",
            text: `SELECT * FROM park`,
        };

        try {
            const result = await this.pool.query(query);

            const parks = result.rows.map((row) => {
                console.log(row)
            })
            return parks;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}