import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { CostsController } from './costs.controller';
import { CostsService } from './costs.service';
import { Cost, CostsSchema } from '../schemas/costs.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostsSchema }]),
    AuthModule,
  ],
  controllers: [CostsController],
  providers: [CostsService],
})
export class CostsModule {}
