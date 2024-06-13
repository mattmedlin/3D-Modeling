import express from "express";
import { SESSION_TOKEN } from "../constants";
import { getUserBySessionToken } from "../queries";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies[SESSION_TOKEN as any];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const result = await getUserBySessionToken(sessionToken);

    if (!result || result.length === 0) {
      return res.sendStatus(403);
    }
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
