import { Module } from '@nestjs/common';
import { HolderModule } from './modules/holder/holder.module';

@Module({
  imports: [HolderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
