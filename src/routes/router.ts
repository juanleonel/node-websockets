import { Router, Request, Response } from "express";

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: 'ok...'
  })
});
router.post('/messages', (req: Request, res: Response) => {
  const body = req.body;
  res.json({
    ok: true,
    message: 'ok... post',
    body: body
  })
});

export default router;
