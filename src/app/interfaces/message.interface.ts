export default interface Message {
  data: string;
  timestamp: number;
  isMine?: boolean;
}
