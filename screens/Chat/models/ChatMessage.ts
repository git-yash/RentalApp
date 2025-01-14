import {Message} from '../../../src/API';

export type ChatMessage = Message & {
  dateString?: string;
  delivered?: boolean | null;
};
