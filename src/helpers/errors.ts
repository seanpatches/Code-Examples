export const throwErrow = (message: string) => {
    const error = new Error("message");
    throw error;
}