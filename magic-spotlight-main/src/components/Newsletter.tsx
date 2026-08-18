"use client";

import { Input, Column, Row, IconButton } from '@once-ui-system/core';
import { useState } from 'react';
import { useToast } from '@once-ui-system/core';

export const Newsletter: React.FC<React.ComponentProps<typeof Row>> = ({ ...flex }) => {
	const [email, setEmail] = useState<string>('');
	const { addToast } = useToast();

	const subscribeToNewsletter = async (email: string) => {
			try {
					console.log('Subscribing to newsletter...');
					addToast({
						variant: 'success',
						message: 'You have successfully subscribed to our newsletter!',
					});
			} catch (error) {
					console.error('Error:', error);
					addToast({
						variant: 'danger',
						message: 'An error occurred while subscribing to our newsletter.',
					});
			}
	};

	return (
		<Column
			fillWidth
			radius="l"
			horizontal="center"
			align="center"
			maxWidth={20}
			data-border="rounded"
			{...flex}>
			<Input
				placeholder="Email"
				id="newsletter-email"
				type="email"
				onChange={(e: any) => setEmail(e.target.value)}
				value={email}
				required
				hasSuffix={
					<IconButton
						id="newsletter-button"
						icon="send"
						onClick={() => subscribeToNewsletter(email)}
						style={{
							marginRight: "-0.25rem"
						}}
					/>
				}
			/>
		</Column>
	)
}