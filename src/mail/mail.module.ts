import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports:[
    MailerModule.forRoot({
      transport:{
        host: 'smtp.example.com',
        secure: false,
        auth: {
          user: 'noreply@api-benavides.gentelonuestro.net ',
          pass: 'xjKUvLFueRD3LXz',
        },
      },
      defaults:{
        from: '"No Reply" <noreply@example.com'
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    })
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
