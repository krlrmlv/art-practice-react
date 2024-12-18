export const sliceString = (string, from, to, dots = true) => {
    if (!string) return

    let result = string.slice(from, to);
    if (dots) {
        result += "..."
    }
    return result
}