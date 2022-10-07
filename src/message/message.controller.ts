import { MessageService } from './message.service';
import { Controller, Get, Param,Body,Delete,Post,UseGuards} from '@nestjs/common';
import {MessageDocument} from './message.schema'
import {MessageDetails} from './message-details.interface'

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}


// create chat 
@Post('createMessage')
createMessage(@Body('chatId')chatId:string,
@Body('senderId')senderId:string,
@Body('message')message:string
):Promise<MessageDocument>{
  return this.messageService.create(chatId,senderId,message);
}

//get message
@Get(':id')
getChat(@Param('id') id: string): Promise<MessageDetails | null> {
  return this.messageService.findById(id);
}


//delete message
@Delete(':id')
  deleteMessage(@Param('id') id: string) {
    return this.messageService.delete(id);
  }

}
