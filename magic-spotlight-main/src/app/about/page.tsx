import { Avatar, Column, Heading, List, ListItem, Text } from '@once-ui-system/core';
import { baseURL, person, seo } from '@/resources';

export async function generateMetadata() {
	const title = seo.about.title;
	const description = seo.about.description;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `${baseURL}${seo.about.path}`,
			images: [
				{
					url: seo.about.image,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [seo.about.image],
		},
	};
}

export default function About() {
	return (
		<Column
			maxWidth="xs"
			horizontal="center"
			gap="48"
			paddingTop="12">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: person.name,
						jobTitle: person.title,
						description: person.about,
						url: `${baseURL}${seo.about.path}`,
						image: `${baseURL}/images/avatar.jpg`,
					}),
				}}
			/>
			<Avatar size="xl" src={"/images/avatar.jpg"}/>
			<Column fillWidth gap="12">
				<Heading align="center" variant="display-strong-s">Hi, I'm Selene</Heading>
				<Text align="center" variant="heading-default-m" onBackground="neutral-weak">I help first-time founders launch profitable businesses</Text>
				<Column fillWidth gap="24" style={{lineHeight: "1.75"}} textVariant="body-default-l" paddingY="48">
					<Text>
						I built my first business 10 years ago.
					</Text>
					<Text>It failed.</Text>
					<Text>
						But it made me realize that building a business is not about being smart, but about persistence.
					</Text>
					<Text>Since then I've launched several profitable businesses and I'm now teaching others how to do it.</Text>
					<Text>Since you're here, you probably want to know how to launch your first business.</Text>
					<Text>Here's what you'll need to start:</Text>
					<List>
						<ListItem>An almost unhealthy obsession</ListItem>
						<ListItem>An idea to change the status quo</ListItem>
						<ListItem>A group of like-minded people</ListItem>
					</List>
					<Text>If you are ready, let's get started!</Text>
				</Column>
			</Column>
		</Column>
	);
}
