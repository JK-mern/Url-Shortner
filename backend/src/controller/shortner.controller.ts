import { PrismaClient } from "@prisma/client";
import { Request, RequestHandler, Response } from "express";
import shortUniqueId from "short-unique-id";

const prisma = new PrismaClient();

export const createUrl: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { originalLink } = req.body;

    if (!originalLink || typeof originalLink !== "string") {
      res
        .status(400)
        .json({ success: false, msg: "Please provide a valid URL" });
      return;
    }

    const uid = new shortUniqueId();
    const uniqueId = uid.randomUUID(4);
    const shortenedUrl = `${process.env.BASE_URL}/${uniqueId}`;

    const response = await prisma.url.create({
      data: {
        originalUrl: originalLink,
        shortendUrl: shortenedUrl,
      },
    });

    res.status(200).json({ success: true, url: shortenedUrl });
  } catch (error) {
    console.error("Error creating shortened URL:", error);
    res
      .status(500)
      .json({ success: false, msg: "An internal server error occurred" });
  }
};

export const getOriginalUrl:RequestHandler= async (req: Request, res: Response):Promise<void> => {
  try {
    let shortCode = req.params.url;
    if (!shortCode) {
       res.status(400).json({ sucess: false, msg: "Invalid Link " });
       return
    }
    let shortUrl = `${process.env.BASE_URL}/${shortCode}`;
    let originalLink = await prisma.url.findFirst({
      where: {
        shortendUrl: shortUrl, // 'shortendUrl' is correct based on your schema
      },
      select: {
        originalUrl: true,
      },
    });

    if (!originalLink) {
      res.status(500).json({ sucess: false, msg: "Failed to Load " });
    }

    res.status(200).json({ success: true, originalLink: originalLink?.originalUrl });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, msg: "An internal server error occurred" });
  }
};
