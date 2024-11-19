interface ProductReviewsProps {
  reviews: { reviewerName: string; rating: number; comment: string }[];
}

const ProductReviews = ({ reviews }: ProductReviewsProps) => (
  <div className="space-y-4">
    <h3 className="font-bold text-lg">Ürün Yorumları:</h3>
    {reviews.slice(0, 2).map((review, index) => (
      <div key={index} className="border-b pb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">{review.reviewerName}</span>
          <span className="text-yellow-400">
            {Array(review.rating).fill("★").join("")}
          </span>
        </div>
        <p className="text-gray-600">
          {review.comment.slice(0, 80)}...
          <span className="text-green-500 ml-2 cursor-pointer">Daha fazla göster</span>
        </p>
      </div>
    ))}
  </div>
);

export default ProductReviews;
