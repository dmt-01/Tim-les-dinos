import { Repository } from "../libs/Repository";
import { Dinosaur } from "../models/Dinosaur";

export class DinosaurRepository extends Repository {


    async findAll() {
        const query = {
            name: "fetch-all-dinosaur",
            text: `SELECT * FROM dinosaur`,
        };

        try {
            const result = await this.pool.query(query);

            const dinosaurs = result.rows.map((row) => Dinosaur.fromRow(row))
            
            return dinosaurs;
        } catch (error) {
            console.log(error);
        }
        return [];
    };
}