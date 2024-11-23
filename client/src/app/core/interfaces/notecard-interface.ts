export interface NotecardInterface {
  _id: any;
  ID: number;
  title: string;
  content: string;
  createdAt: string;
  subject: {
    _id: any;
    name: string;
    color: string;
  };
}
