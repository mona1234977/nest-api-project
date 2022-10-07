import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {MessageDocument}from './message.schema';
import {Model} from 'mongoose';
import {MessageDetails} from './message-details.interface'
 
@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private readonly messageModel: Model<MessageDocument>) {}
    async create(
        chatId:string,
        senderId:string,
        message:string
        ): Promise<MessageDocument> {
            const newMessage = new this.messageModel({ chatId,senderId,message});
            return newMessage.save();
          }



          //get message
          _getMessageDetails(Message: MessageDocument): MessageDetails {
            return{
                id: Message._id,
                chatId:Message.chatId,
                senderId: Message.senderId,
                message: Message.message,
            };
        }

          async findById(id: string): Promise<MessageDetails | null> {
            const Message = await this.messageModel.findById(id).exec();
            if (!Message) return null;
            return this._getMessageDetails(Message);
          }


          //delete message
          async delete(id: string) {
            return this.messageModel.deleteOne({ _id: id }).exec();
          
        }
}