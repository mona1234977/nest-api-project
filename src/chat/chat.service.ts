import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {ChatDocument}from './chat.schema';
import {Model} from 'mongoose';
import {ChatDetails} from './chat-details.interface'
 
@Injectable()
export class ChatService {
    constructor(@InjectModel('Chat') private readonly chatModel: Model<ChatDocument>) {}
    
    // create chat
     async create(
        senderId:string,
        receiverId:string
        ): Promise<ChatDocument> {
            const newChat = new this.chatModel({ senderId,receiverId});
            return newChat.save();
          }
          
          //get chat
          _getChatDetails(Chat: ChatDocument): ChatDetails {
            return{
                id: Chat._id,
                senderId: Chat.senderId,
                receiverId: Chat.receiverId,
            };
        }

          async findById(id: string): Promise<ChatDetails | null> {
            const Chat = await this.chatModel.findById(id).exec();
            if (!Chat) return null;
            return this._getChatDetails(Chat);
          }


          //delete chat 
          async delete(id: string) {
            return this.chatModel.deleteOne({ _id: id }).exec();
          
        }

        }


