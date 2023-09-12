import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingRatingService } from './rating_ratings.service';
import { RatingRatingController } from './rating_ratings.controller';
import { RatingRating } from './entities/rating_rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingRating])],
  controllers: [RatingRatingController],
  providers: [RatingRatingService],
})
export class RatingRatingsModule {}
