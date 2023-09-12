import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { RatingRatingService } from './rating_ratings.service';
import { CreateRatingRatingDto } from './dto/create-rating_rating.dto';
import { UpdateRatingRatingDto } from './dto/update-rating_rating.dto';

@Controller('rating-ratings')
export class RatingRatingController {
  constructor(private readonly ratingRatingService: RatingRatingService) {}

  @Post()
  createRatingRating(@Body() createRatingRatingDto: CreateRatingRatingDto) {
    return this.ratingRatingService.createRatingRating(createRatingRatingDto);
  }

  @Get()
  getRatingRatings() {
    return this.ratingRatingService.getRatingRatings();
  }

  @Get(':id')
  getRatingRating(@Param('id') id: string) {
    return this.ratingRatingService.getRatingRating(+id);
  }

  @Patch(':id')
  updateRatingRating(
    @Param('id') id: string,
    @Body() updateRatingRatingDto: UpdateRatingRatingDto,
  ) {
    return this.ratingRatingService.updateRatingRating(
      +id,
      updateRatingRatingDto,
    );
  }

  @Delete(':id')
  deleteRatingRating(@Param('id') id: string) {
    return this.ratingRatingService.deleteRatingRating(+id);
  }
}
