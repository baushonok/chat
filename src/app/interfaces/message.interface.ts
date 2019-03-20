export interface Message {
  id: string;
  data: string;
  timestamp: number;
  isMine?: boolean;
}
