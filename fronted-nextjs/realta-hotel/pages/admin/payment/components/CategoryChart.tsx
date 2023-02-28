import { Card, Container, Text } from "@nextui-org/react";
import styles from "@/styles/chartCards.module.css";
import { DonutChart } from "@tremor/react";

export default function CategoryChart({ data, name }: {
    data: any[]
    name: string
}) {
    console.log(data)
    return (
        <Container className={styles.container}>
            <Card variant="bordered">
                <Card.Header className={styles.header}>
                    <Text>
                        Total {name}
                    </Text>
                </Card.Header>
                <Card.Body className={styles.body}>
                    <DonutChart
                        data={data}
                        // category="transactionType"
                        dataKey="transactionType"
                        colors={["blue", "red", "yellow", "amber"]}
                        variant="pie"
                        // valueFormatter={undefined}
                        // label={undefined}
                        showLabel={true}
                        showTooltip={true}
                        showAnimation={true}
                        height="h-44"
                        marginTop="mt-0"
                    />
                </Card.Body>
            </Card>
        </Container>
    )
}