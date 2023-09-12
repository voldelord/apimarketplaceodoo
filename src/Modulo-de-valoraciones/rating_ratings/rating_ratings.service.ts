import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RatingRating } from './entities/rating_rating.entity';
import { CreateRatingRatingDto } from './dto/create-rating_rating.dto';
import { UpdateRatingRatingDto } from './dto/update-rating_rating.dto';

@Injectable()
export class RatingRatingService {
  constructor(
    @InjectRepository(RatingRating)
    private readonly ratingRatingRepository: Repository<RatingRating>,
  ) {}

  async createRatingRating(createRatingRatingDto: CreateRatingRatingDto) {
    const newRatingRating = this.ratingRatingRepository.create(
      createRatingRatingDto,
    );
    return this.ratingRatingRepository.save(newRatingRating);
  }

  getRatingRatings() {
    return this.ratingRatingRepository.find();
  }

  async getRatingRating(id: number) {
    const ratingRating = await this.ratingRatingRepository.findOne({
      where: {
        id,
      },
    });
    if (!ratingRating) {
      throw new NotFoundException('Rating Rating not found');
    }
    return ratingRating;
  }

  async updateRatingRating(
    id: number,
    updateRatingRatingDto: UpdateRatingRatingDto,
  ) {
    const ratingRating = await this.getRatingRating(id);
    this.ratingRatingRepository.merge(ratingRating, updateRatingRatingDto);
    return this.ratingRatingRepository.save(ratingRating);
  }

  async deleteRatingRating(id: number) {
    const result = await this.ratingRatingRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Rating Rating not found');
    }

    return result;
  }
}
