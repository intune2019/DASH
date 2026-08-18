import { Column, Heading, Line, Meta, Schema, Text } from "@once-ui-system/core";
import { Newsletter } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, person, seo } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: seo.blog.title,
    description: seo.blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Blog")}`,
    path: seo.blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth={54} paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={seo.blog.title}
        description={seo.blog.description}
        path={seo.blog.path}
        image={`/api/og/generate?title=${encodeURIComponent("Blog")}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}/images/avatar.jpg`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        Blog
      </Heading>
      <Column fillWidth flex={1} gap="40" paddingBottom="32">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Column fillWidth gap="16" horizontal="center" paddingBottom="48">
          <Line marginBottom="48" />
          <Heading as="h2" variant="heading-strong-xl">Subscribe to Launchtime</Heading>
          <Text onBackground="neutral-weak" marginBottom="24">My weekly newsletter about business and technology</Text>
          <Newsletter />
          <Line marginTop="48" />
        </Column>
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}