import { Card, Container, Text } from "@nextui-org/react";
import styles from "@/styles/chartCards.module.css"

export default function InfoChart({ data, name }: { data: any[], name: string }) {
    return (
        <Container className={styles.container}>
            <Card variant="bordered">
                <Card.Header className={styles.header}>
                    <Text>
                        Total {name}
                    </Text>
                </Card.Header>
                <Card.Body className={styles.body}>
                    <Text size={52} b>
                        {data.length}
                    </Text>
                </Card.Body>
            </Card>
        </Container>
    )
}