export const onChangTime = (timeType: string, value: string, state: { appendAt: string | undefined }) => {
    if (!state.appendAt) {
        return {appendAt: new Date().toISOString()}
    }
    switch (timeType) {
        case 'year':
            return {appendAt: state.appendAt.replace(/\d{4}/g, value)}
        case 'month':

            return {
                appendAt: state.appendAt.replace(
                    /(\d{4})-(\d{2})-(\d{2})/g, `$1\-${value}\-$3`)
            }
        case 'date':
            return {
                appendAt: state.appendAt.replace(
                    /(\d{4})-(\d{2})-(\d{2})/g, `$1\-$2\-${value}`)
            }
        default:
            throw new Error()
    }
}