import { ChatService } from './chat.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Controller, Get, Param,Body,Delete,Post,UseGuards} from '@nestjs/common';
import {ChatDocument} from './chat.schema'
import {ChatDetails} from './chat-details.interface'

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}


// create chat 
@Post('createChat')
createChat(@Body('senderId')senderId:string,
@Body('receiverId')receiverId:string
):Promise<ChatDocument>{
  return this.chatService.create(senderId,receiverId);
}

//get chat
@Get(':id')
getChat(@Param('id') id: string): Promise<ChatDetails | null> {
  return this.chatService.findById(id);
}


//delete chat 
@Delete(':id')
  deleteChat(@Param('id') id: string) {
    return this.chatService.delete(id);
  }
}







