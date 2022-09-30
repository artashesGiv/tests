declare function createHtml(data: Record<string, string | number>): string
declare function wrapField(field: { name: string; value: string[] | string | number | null }, bold?: boolean): string
declare function mailSubject(url: string, data: Record<string, string>): string
export function send(req: Request, res: Response): void
