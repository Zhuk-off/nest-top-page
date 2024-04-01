import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewDocument, ReviewModel } from './review.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto) {
    console.log('dto--service create', dto);
    const newReview = new this.reviewModel(dto);
    console.log('dto--service create newReview', newReview);
    return newReview.save();
  }

  async delete(id: string) {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string) {
    return this.reviewModel.find({ productId }).exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId }).exec();
  }
}
