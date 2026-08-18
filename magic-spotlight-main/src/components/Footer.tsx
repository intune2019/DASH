import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core"
import { social, person } from '@/resources';
import styles from './Footer.module.scss'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            fillWidth padding="8"
            horizontal="center" s={{ direction: "column" }}>
            <Flex
                className={styles.mobile}
                maxWidth="m" paddingY="16" paddingX="16" gap="16"
                horizontal="between" vertical="center"
                s={{
                    direction: "column",
                    horizontal: "center",
                }}>
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    <Text
                        onBackground="neutral-weak">
                        © {currentYear} /
                    </Text>
                    <Text paddingX="4">
                        {person.name}
                    </Text>
                    <Text onBackground="neutral-weak">
                        {/* You can remove this since you have Pro membership */}
                        / Built with <SmartLink unstyled href="https://once-ui.com">Once UI</SmartLink>
                    </Text>
                </Text>
                <Flex
                    gap="16">
                    {social.map((item: any) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"/>
                        )
                    ))}
                </Flex>
            </Flex>
            <Flex height="80" hide s={{hide: false}}/>
        </Flex>
    )
}