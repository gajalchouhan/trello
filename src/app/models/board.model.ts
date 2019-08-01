//It create a new object of Board
import { Column } from './column.model';

export class Board {
    constructor(public name: any, public columns: Column[]) { }
}