import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps
} from "@mui/material";
import { MouseEventHandler } from "react";
import { DialogTemplate } from "..";

const ClearDialogTemplate = ({
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
        <DialogTemplate props={dialogProps}>
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
        </DialogTemplate>
    );
};

export default ClearDialogTemplate;
