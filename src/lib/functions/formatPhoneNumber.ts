export const formatPhoneNumber = (phone: string) =>
    phone
        .slice(phone[0] === "+" ? 2 : 1)
        .replace(
            /(\d{3})(\d{3})(\d{2})(\d{2})/g,
            `${phone[0] === "+" ? "+7" : "8"} ($1) $2 $3 $4`
        );
