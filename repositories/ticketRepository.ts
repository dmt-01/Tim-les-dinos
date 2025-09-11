import { Repository } from "../libs/Repository";

export class TicketRepository extends Repository {
    findAll = async () => {
        const query = {
            name: "fetch-all-ticket",
            text: `SELECT * FROM ticket`,
        };

        try {
            const result = await this.pool.query(query);

            const tickets = result.rows.map((row) => {
                console.log(row)
            })
            return tickets;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}