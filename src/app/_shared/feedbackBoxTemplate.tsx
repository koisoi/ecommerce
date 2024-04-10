import { ProductReview } from "@/lib";
import {
    Box,
    BoxProps,
    Card,
    CardContent,
    CardProps,
    Typography,
    TypographyProps
} from "@mui/material";

const FeedbackBoxTemplate = ({ feedback }: { feedback: ProductReview[] }) => {
    const feedbackWrapperProps: BoxProps = {
        display: "grid",
        gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr"
        },
        gap: "20px"
    };

    const feedbackProps: CardProps = {
        variant: "outlined",

        sx: {
            height: "100%",
            width: "100%"
        }
    };

    const feedbackNameDateBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",

        marginBottom: "10px"
    };

    const feedbackNameProps: TypographyProps = {
        color: "primary.main",
        fontSize: "1rem",
        fontWeight: "bold"
    };

    const feedbackDateProps: TypographyProps = {
        color: "text.disabled",
        fontSize: "0.85rem"
    };

    const feedbackCommentProps: TypographyProps = {
        fontSize: "0.95rem"
    };

    const feedbackCommentTitleProps: TypographyProps = {
        fontWeight: "bold"
    };

    return (
        <Box {...feedbackWrapperProps}>
            {feedback.map((fb) => (
                <Card key={fb.id} {...feedbackProps}>
                    <CardContent>
                        <Box {...feedbackNameDateBoxProps}>
                            <Typography {...feedbackNameProps}>
                                {fb.name}
                            </Typography>
                            <Typography {...feedbackDateProps}>
                                {fb.created.replaceAll("-", ".")}
                            </Typography>
                        </Box>
                        {!!fb.pro && (
                            <Box>
                                <Typography {...feedbackCommentTitleProps}>
                                    Достоинства:
                                </Typography>
                                <Typography {...feedbackCommentProps}>
                                    {fb.pro}
                                </Typography>
                            </Box>
                        )}
                        {!!fb.contra && (
                            <Box>
                                <Typography {...feedbackCommentTitleProps}>
                                    Недостатки:
                                </Typography>
                                <Typography {...feedbackCommentProps}>
                                    {fb.contra}
                                </Typography>
                            </Box>
                        )}
                        {!!fb.comment && (
                            <Box>
                                <Typography {...feedbackCommentTitleProps}>
                                    Комментарий:
                                </Typography>
                                <Typography {...feedbackCommentProps}>
                                    {fb.comment}
                                </Typography>
                            </Box>
                        )}
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default FeedbackBoxTemplate;
