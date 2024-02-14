import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText
} from "@mui/material";
import { MouseEventHandler } from "react";

const ClearDialog = ({
    open,
    onClear,
    onDialogClose
}: {
    open: boolean;
    onClear: MouseEventHandler<HTMLButtonElement>;
    onDialogClose: (event: any) => void;
}) => {
    return (
        <Dialog open={open} onClose={onDialogClose}>
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
        </Dialog>
    );
};

export default ClearDialog;
