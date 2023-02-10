import { NextFunction, Request, Response, Errback } from "express";
import { ApiErrors } from './apiErrors.js';

export function apiErrorHandler(err: Errback, request: Request, response: Response, next: NextFunction) {
  if (err instanceof ApiErrors) {
    return response.status(err.code).json({
      error: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
}