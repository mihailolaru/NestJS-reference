import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
=======
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
>>>>>>> 46decc7fe556873becbc075667d7aea87b30f749
})
export class AppModule {}
