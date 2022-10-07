import { Prop,Schema ,SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type MessageDocument = Message & Document

@Schema()
export class Message {
    @Prop({required: true})
    chatId: string;
    @Prop({required: true, unique:true})
    senderId: string;
    @Prop({required: true})
    message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);