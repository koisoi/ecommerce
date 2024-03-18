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

const ClearDialog = ({
    open,
    onClear,
    onDialogClose
}: {
    open: boolean;
    onClear?: MouseEventHandler<HTMLButtonElement>;
    onDialogClose?: (event: any) => void;
}) => {
    const dialogProps: DialogProps = {
        open,
        onClose: onDialogClose
    };

    return (
        <AppDialog props={dialogProps}>
            <DialogContent>
                <DialogContentText>
                    Вы уверены, что хотите очистить корзину?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClear}>Да</Button>
                <Button onClick={onDialogClose} autoFocus>
                    Нет
                </Button>
            </DialogActions>
        </AppDialog>
    );
};

export default ClearDialog;
