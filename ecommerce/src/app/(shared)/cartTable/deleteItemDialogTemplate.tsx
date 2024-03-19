import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps
} from "@mui/material";
import { MouseEventHandler } from "react";
import { DialogTemplate } from "..";

const DeleteItemDialogTemplate = ({
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
        <DialogTemplate props={dialogProps}>
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
        </DialogTemplate>
    );
};

export default DeleteItemDialogTemplate;
