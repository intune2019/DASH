import {
	Heading,
	Text,
	RevealFx,
	Column,
	Row,
	Schema,
	Meta,
	Card,
	Media,
	AvatarGroup,
	Line,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { Newsletter } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { seo } from "@/resources";

export async function generateMetadata() {
	return Meta.generate({
	  title: seo.home.title,
	  description: seo.home.description,
	  baseURL: baseURL,
	  path: seo.home.path,
	  image: seo.home.image,
	});
}
  
export default function Home() {
	return (
	  <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
			<Schema
				as="webPage"
				baseURL={baseURL}
				path={seo.home.path}
				title={seo.home.title}
				description={seo.home.description}
				image={seo.home.image}
				author={{
					name: person.name,
					url: `${baseURL}/about`,
					image: `${baseURL}/images/avatar.jpg`,
				}}
			/>
			<Column fillWidth horizontal="center" gap="m">
				<Column maxWidth="s" horizontal="center" align="center">
					<RevealFx
						fillWidth
						horizontal="center"
						paddingTop="16"
						paddingBottom="32"
						>
						<Text style={{letterSpacing: "0.2em"}} variant="code-default-m" onBackground="brand-weak">
							{person.name}
						</Text>
					</RevealFx>
					<RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
						<Heading wrap="balance" variant="display-strong-l">
							Launch your first business
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="40">
						<Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
							I'll teach you how to build a profitable business
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4} horizontal="center">
						<Newsletter />
					</RevealFx>
					<RevealFx translateY="16" delay={0.6} horizontal="center">
						<Row vertical="center" gap="16" paddingTop="24">
						<AvatarGroup
							reverse
							size="m"
							avatars={[
								{ src: "/images/avatars/01.png" },
								{ src: "/images/avatars/02.png" },
								{ src: "/images/avatars/03.png" },
								{ src: "/images/avatars/04.png" },
							]}
						/>
						<Text variant="code-default-s">Join 12k+ readers</Text>
					</Row>
				</RevealFx>
				</Column>
			</Column>
			<Row fillWidth gap="48" s={{direction: "column"}}>
				<RevealFx translateY="16" delay={0.6}>
					<Card href="https://once-ui.com" fillWidth direction="column" radius="l-4" border="transparent" background="transparent" padding="4">
						<Media src="/images/projects/cover-once-ui.jpg" radius="l" border="neutral-alpha-weak" aspectRatio="16 / 9" sizes="(max-width: 768px) 100vw, 480px" />
						<Column fillWidth gap="8" paddingY="24" paddingX="l">
							<Text variant="heading-strong-l">Once UI</Text>
							<Text onBackground="neutral-weak">The fastest way to launch high-quality products</Text>
						</Column>
					</Card>
				</RevealFx>
				<RevealFx translateY="20" delay={0.8}>
					<Card href="https://once-ui.com/blog/the-dopler-method" fillWidth direction="column" radius="l-4" border="transparent" background="transparent" padding="4">
						<Media src="/images/projects/cover-dopler-method.jpg" radius="l" border="neutral-alpha-weak" aspectRatio="16 / 9" sizes="(max-width: 768px) 100vw, 480px" />
						<Column fillWidth gap="8" paddingY="24" paddingX="l">
							<Text variant="heading-strong-l">The Dopler Method</Text>
							<Text onBackground="neutral-weak">The framework to build a successful solo business</Text>
						</Column>
					</Card>
				</RevealFx>
			</Row>
			<RevealFx fillWidth direction="column" translateY="20" gap="xl" delay={0.8}>
				<Column fillWidth horizontal="center" gap="24" marginTop="24">
					<Line maxWidth="40" />
					<Text style={{letterSpacing: "0.2em"}} variant="code-default-m" onBackground="neutral-weak">
						From the blog
					</Text>
				</Column>
				<Row fillWidth gap="24" paddingBottom="40" s={{ direction: "column" }}>
					<Posts columns="2" />
				</Row>
			</RevealFx>
	  </Column>
	);
}