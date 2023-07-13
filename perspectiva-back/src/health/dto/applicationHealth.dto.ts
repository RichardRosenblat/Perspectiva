export class ApplicationHealthDto {
  public status: 'OK' | 'ERROR';
  public version: string;
  public port: number;
  public databaseStatus: string;
}
