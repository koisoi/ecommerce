import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps
} from "@mui/material";
import { MouseEventHandler } from "react";
import { AppDialog } from "..";

const DeleteItemDialog = ({
    open,
    onDelete,
    onDialogClose
}: {
    open: boolean;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    onDialogClose: (event: any) => void;
}) => {
    const dialogProps: DialogProps = {
        open,
        onClose: onDialogClose
    };

    return (
        <AppDialog props={dialogProps}>
            <DialogContent>
                <DialogContentText>
                    Вы уверены, что хотите удалить товар из корзины?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onDelete}>Да</Button>
                <Button onClick={onDialogClose} autoFocus>
                    Нет
                </Button>
            </DialogActions>
        </AppDialog>
    );
};

export default DeleteItemDialog;
