import { Response, Request } from 'express'

/**
 * List of API examples.
 * @route GET /api
 */
export function health(req: Request, res: Response) {
  res.send({
    title: 'API Examples',
  })
}
