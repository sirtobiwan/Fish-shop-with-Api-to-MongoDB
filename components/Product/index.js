import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>
        {data.reviews.length > 0 ? (
          <h3>Review(s): {data.reviews.length}</h3>
        ) : (
          <p>
          <i>No reviews yet...write the first review!</i>
        </p>
        ) }
        {data.reviews?.map((review)=>(
          <section key={review._id}>
          <h4>{review.title}</h4>
          <p>{review.text}</p>
          <p>Rating: {review.rating}</p>
        </section>
        ))}
      </p>
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
    </ProductCard>
  );
}
