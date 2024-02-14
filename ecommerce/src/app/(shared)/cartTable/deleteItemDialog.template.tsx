import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText
} from "@mui/material";
import { MouseEventHandler } from "react";

const DeleteItemDialog = ({
    open,
    onDelete,
    onDialogClose
}: {
    open: boolean;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    onDialogClose: (event: any) => void;
}) => {
    return (
        <Dialog open={open} onClose={onDialogClose}>
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
        </Dialog>
    );
};

export default DeleteItemDialog;
