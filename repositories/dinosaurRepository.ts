import { Repository } from "../libs/Repository";
import { Dinosaur } from "../models/Dinosaur";

export class DinosaurRepository extends Repository {
  async findAll() {
    const query = {
      name: "fetch-all-dinosaurs",
      text: `SELECT * FROM dinosaur`,
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Dinosaur.fromRow(row));
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async findById(id: number) {
    const query = {
      name: "fetch-dinosaur-by-id",
      text: `
      SELECT 
            id_dinosaur,
            breed,
            name,
            id_park,
            description 
            FROM dinosaur
            WHERE id_dinosaur = $1
            `,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rows[0]) {
        return Dinosaur.fromRow(result.rows[0]);
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
