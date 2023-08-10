import express, {Request, Response} from "express";

const router = express.Router();

// Test route
router.get('/', (_: Request, res: Response) => {
    res.json({ "success": true });
});

export default router;