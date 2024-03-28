import { ReactNode } from "react";

export default function HTMLComment({ comment }: { comment: ReactNode }) {
    const html = `<!-- ${comment} -->`;
    const callback = (instance: any) => {
        if (instance) {
            instance.outerHTML = html;
        }
    };
    return (
        <script
            ref={callback}
            type="text/comment"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
