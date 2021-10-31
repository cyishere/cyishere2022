import { Layout } from "@/components/Layout";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";

const about = () => {
  return (
    <Layout title="About CY">
      <MaxWidthWrapper>
        <SectionTitle variant="salmon">About Me</SectionTitle>
      </MaxWidthWrapper>
    </Layout>
  );
};

export default about;
