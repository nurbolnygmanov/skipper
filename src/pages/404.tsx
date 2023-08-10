import { Link } from "@/components/link";

const NotFoundPage = () => {
  return (
    <>
      <h4>404</h4>
      <Link as="button" href="/">
        Back
      </Link>
    </>
  );
};

export default NotFoundPage;
