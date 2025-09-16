export interface VisitorTypeRow {
  id_visitor: number;
  first_name: string;
  last_name: string;
  years: number;
}

export class Visitor {
  protected id_visitor: number;
  protected first_name: string;
  protected last_name: string;
  protected years: number;

  constructor(
    id_visitor: number,
    first_name: string,
    last_name: string,
    years: number
  ) {
    this.id_visitor = id_visitor;
    this.first_name = first_name;
    this.last_name = last_name;
    this.years = years;
  }

  static fromRow(row: VisitorTypeRow): Visitor {
    return new Visitor(
      row.id_visitor,
      row.first_name,
      row.last_name,
      row.years
    );
  }

  getIdVisitor() {
    return this.id_visitor;
  }

  getFirstName() {
    return this.first_name;
  }

  getLastName() {
    return this.last_name;
  }

  getYears() {
    return this.years;
  }
}
